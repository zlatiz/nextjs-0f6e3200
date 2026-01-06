export default function Footer(): JSX.Element {
  return (
    <footer className="w-full border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm footer-muted">© Copyright 2015 by <span>Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div className="text-sm mt-3 md:mt-0 text-right">
          <a href="/transparency-in-coverage" className="mr-4">Transparency in Coverage</a>
          <a href="contact.aspx" className="mr-4">Contact (legacy)</a>
          <a href="http://www.goodhiring.com/garberbrosinc/apply/open">Apply</a>
        </div>
      </div>
    </footer>
  );
}
