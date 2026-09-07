"""Validate and package the existing static site without a framework or dependency install."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import unquote,urlsplit
import re,shutil
ROOT=Path(__file__).resolve().parents[1]
class Document(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.paths=[];self.anchors=[]
 def handle_starttag(self,tag,attrs):
  attrs=dict(attrs)
  if 'id' in attrs:self.ids.append(attrs['id'])
  for attr in ('src','href'):
   value=attrs.get(attr,'')
   if value.startswith('#'):self.anchors.append(value[1:])
   elif value and not urlsplit(value).scheme:self.paths.append(value)
  if 'srcset' in attrs:self.paths.extend(part.strip().split()[0] for part in attrs['srcset'].split(','))
for entry in [ROOT/'index.html',ROOT/'ls-final/index.html']:
 parser=Document();parser.feed(entry.read_text())
 assert len(parser.ids)==len(set(parser.ids)),f'Duplicate ids: {entry}'
 assert all(anchor in parser.ids for anchor in parser.anchors),f'Unresolved anchor: {entry}'
 for path in parser.paths:
  file=(ROOT/path.lstrip('/')) if path.startswith('/') else entry.parent/path
  assert file.is_file(),f'Missing asset: {file}'
assert (ROOT/'ls-final/index.html').read_text()==(ROOT/'index.html').read_text().replace('/ls-final/',''),'Entry points differ'
data=(ROOT/'ls-final/assets/portfolio-data.js').read_text()
for name in re.findall(r"img:'([^']+)'",data):
 image=ROOT/'ls-final/images'/name
 assert image.is_file(),f'Missing portfolio image: {image}'
 for size in [640,1200]:
  preview=image.parent/'optimized'/f'{image.stem.replace(" ","-")}-{size}.webp'
  assert preview.is_file(),f'Missing preview: {preview}'
out=ROOT/'dist'
if out.exists():shutil.rmtree(out)
out.mkdir()
shutil.copy2(ROOT/'index.html',out/'index.html')
shutil.copytree(ROOT/'ls-final',out/'ls-final',ignore=shutil.ignore_patterns('README.md','vercel.json'))
print('Build passed: both entry points, internal anchors, image assets and responsive previews verified.')
