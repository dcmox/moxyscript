<!DOCTYPE html>
<html>
	<head>
        <title>{{metaData.title}}</title>
        <link rel="stylesheet" type="text/css" href="/assets/css/normalize.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/wide.css" /> 
        <meta property="og:image" content="https://www.site.com/thumbnail.jpg">
		<meta name="twitter:card" content="summary_large_image" />
		<meta property="og:title" content="{{metaData.title}}" />
		<meta property="og:description" content="{{metaData.description}}" />
		<meta name="description" content="{{metaData.description}}" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
	</head>
	<body class="home">
        <header>
            <div class="wrapper">
                <h1>Moxy<span>Script</span></h1>
                <nav class="desktop">
                    <a href="/" {{{isActive index}}}>Home</a>
                    <a href="/about" {{{isActive about}}}>About</a>
                    <a href="/info" {{{isActive info}}}>Info</a>
                    <a href="/contact" {{{isActive contact}}}>Contact</a>
                </nav>
                <nav class="mobile">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <a href="/" {{{isActive index}}}><li>Home</li></a>
                            <a href="/about" {{{isActive about}}}><li>About</li></a>
                            <a href="/info" {{{isActive info}}}><li>Info</li></a>
                            <a href="/contact" {{{isActive contact}}}><li>Contact</li></a>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <section class="fold">
            <div class="wrapper">
                <p class="slogan">
                    <span class="text1">Say goodbye to the old.</span> <span class="text2">Time to bring you into the future of AI.</span> <span class="text3">Get ready to automate web dev.</span> 
                    <span class="text1">The time for revolution is now.</span>
                </p>
            </div>
        </section>
        <section>
            <div class="box">
                <h4>Automation</h4>
                <p>
                    MoxyScript has built in tools to help you automate your development.
                </p>
            </div>
            <div class="box">
                <h4>Analytics</h4>
                <p>
                    Moxy Analytics can help you identify weakpoints in your application design.
                </p>           
            </div>
            <div class="box">
                <h4>Ease of Use</h4>
                <p>
                    MoxyScript was built from the ground-up to be easy to learn and use.
                </p>    
            </div>
            <div class="box">
                <h4>Efficient</h4>
                <p>
                    MoxyScript is designed to minimize dependencies and give developers choice.
                </p>  
            </div>
            <div class="box">
                <h4>Open Source</h4>
                <p>
                    MoxyScript is completely open source.
                </p> 
				<a href="https://github.com/dcmox/moxyscript" target="_blank" class="more">Join the revolution</a>
            </div>
        </section>
        <section class="fold mountains parallax">
        </section>
        <main>
            {{{subPage}}}
        </main>
        <footer>
            &copy; 2020 Daniel Moxon - <a href="https://github.com/dcmox/html-templates">GitHub.com</a>
        </footer>
    </body>
    <!-- This demo was created by Daniel Moxon @ github.com/dcmox -->
</html>