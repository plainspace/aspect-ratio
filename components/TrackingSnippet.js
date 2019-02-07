const TrackingSnippet = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function(f, a, t, h, o, m){
	a[h]=a[h]||function(){
		(a[h].q=a[h].q||[]).push(arguments)
	};
	o=f.createElement('script'),
	m=f.getElementsByTagName('script')[0];
	o.async=1; o.src=t; o.id='fathom-script';
	m.parentNode.insertBefore(o,m)
})(document, window, '//stats.johnmeguerian.com/tracker.js', 'fathom');
fathom('set', 'siteId', 'UEYJS');
fathom('trackPageview');`
      }}
    />
  )
}

export default TrackingSnippet
