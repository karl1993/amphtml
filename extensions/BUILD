package(default_visibility = ["//visibility:public"])

genrule(
    name = "validator-extensions-protoascii_",
    srcs = glob(
        [
            "*/validator-*.protoascii",
        ],
    ),
    outs = ["validator-extensions-protoascii"],
    cmd = "cat $(SRCS) > $(OUTS)",
)

filegroup(
    name = "testdata_files",
    srcs = glob([
            "*/*/test/*.html",
            "*/*/test/*.out",
            "*/*/test/*.cpponly",
        ])
)
oggle Sidebar
Documentation
Guides & Tutorials
Create your first AMP Page
Create your AMP HTML page
The following markup is a decent starting point or boilerplate. Copy this and save it to a file with a .html extension.

<!doctype html>
<html amp lang="en">
  <head><script async custom-element="amp-auto-ads"
        src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js">
</script>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <title>Hello, AMPs</title>
    <link rel="canonical" href="https://amp.dev/documentation/guides-and-tutorials/start/create/basic_markup/">
    <meta name="viewport" content="width=device-width">
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "headline": "Open-source framework for publishing content",
        "datePublished": "2015-10-07T12:02:41Z",
        "image": [
          "logo.jpg"
        ]
      }
    </script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  </head>
  <body>
<amp-auto-ads type="adsense"
        data-ad-client="ca-pub-8612299075575495">
</amp-auto-ads>
    <h1>Welcome to the mobile web</h1>
  </body>
</html>
