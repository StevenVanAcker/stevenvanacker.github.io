---
layout: page
title: Publications
hidetitle: true
sidebar: true
rank: 3
paperblank:
 - title: ""
   authors: ""
   longconf: ""
   shortconf: ""
   date: ""
   doi: ""
   pdflink: "/public/papers/"
   abstract: ""
papers:
 - title: "You are what you include: large-scale evaluation of remote javascript inclusions"
   authors: "Nick Nikiforakis, Luca Invernizzi, Alexandros Kapravelos, Steven Van Acker, Wouter Joosen, Christopher Kruegel, Frank Piessens, Giovanni Vigna"
   longconf: "Proceedings of the 2012 ACM conference on Computer and Communications Security"
   shortconf: "CCS 2012"
   date: "2012/10/16"
   doi: "10.1145/2382196.2382274"
   pdflink: "/public/papers/you-are-what-you-include.pdf"
   abstract: "JavaScript is used by web developers to enhance the interactivity of
	their sites, offload work to the users' browsers and improve their sites'
	responsiveness and user-friendliness, making web pages feel and behave like
	traditional desktop applications. An important feature of JavaScript, is the
	ability to combine multiple libraries from local and remote sources into the
	same page, under the same namespace. While this enables the creation of more
	advanced web applications, it also allows for a malicious JavaScript provider
	to steal data from other scripts and from the page itself. Today, when
	developers include remote JavaScript libraries, they trust that the remote
	providers will not abuse the power bestowed upon them.

	In this paper, we report on a large-scale crawl of more than three million
	pages of the top 10,000 Alexa sites, and identify the trust relationships of
	these sites with their library providers. We show the evolution of JavaScript
	inclusions over time and develop a set of metrics in order to assess the
	maintenance-quality of each JavaScript provider, showing that in some cases,
	top Internet sites trust remote providers that could be successfully
	compromised by determined attackers and subsequently serve malicious
	JavaScript. In this process, we identify four, previously unknown, types of
	vulnerabilities that attackers could use to attack popular web sites. Lastly,
	we review some proposed ways of protecting a web application from malicious
	remote scripts and show that some of them may not be as effective as previously
	thought."

 - title: "JSand: complete client-side sandboxing of third-party JavaScript without browser modifications"
   authors: "Pieter Agten, Steven Van Acker, Yoran Brondsema, Phu H Phung, Lieven Desmet, Frank Piessens"
   longconf: "Proceedings of the 28th Annual Computer Security Applications Conference"
   shortconf: "ACSAC 2012"
   date: "2012/12/03"
   doi: "10.1145/2420950.2420952"
   pdflink: "/public/papers/jsand.pdf"
   abstract: "The inclusion of third-party scripts in web pages is a common
	practice. A recent study has shown that more than half of the Alexa top 10000
	sites include scripts from more than 5 different origins. However, such script
	inclusions carry risks, as the included scripts operate with the privileges of
	the including website.

	We propose JSand, a server-driven but client-side JavaScript sandboxing
	framework. JSand requires no browser modifications: the sandboxing framework is
	implemented in JavaScript and is delivered to the browser by the websites that
	use it. Enforcement is done entirely at the client side: JSand enforces a
	server-specified policy on included scripts without requiring server-side
	filtering or rewriting of scripts. Most importantly, JSand is complete: access
	to all resources is mediated by the sandbox.

	We describe the design and implementation of JSand, and we show that it is
	secure, backwards compatible, and that it performs sufficiently well."

 - title: "Webjail: Least-privilege integration of third-party components in web mashups"
   authors: "Steven Van Acker, Philippe De Ryck, Lieven Desmet, Frank Piessens, Wouter Joosen"
   longconf: "Proceedings of the 27th Annual Computer Security Applications Conference"
   shortconf: "ACSAC 2011"
   date: "2011/12/05"
   doi: "10.1145/2076732.2076775"
   pdflink: "/public/papers/webjail.pdf"
   abstract: "In the last decade, the Internet landscape has transformed from a
	mostly static world into Web 2.0, where the use of web applications and mashups
	has become a daily routine for many Internet users. Web mashups are web
	applications that combine data and functionality from several sources or
	components. Ideally, these components contain benign code from trusted sources.
	Unfortunately, the reality is very different. Web mashup components can
	misbehave and perform unwanted actions on behalf of the web mashup's user.

	Current mashup integration techniques either impose no restrictions on the
	execution of a third-party component, or simply rely on the Same-Origin Policy.
	A least-privilege approach, in which a mashup integrator can restrict the
	functionality available to each component, can not be implemented using the
	current integration techniques, without ownership over the component's code.

	We propose WebJail, a novel client-side security architecture to enable
	least-privilege integration of components into a web mashup, based on
	high-level policies that restrict the available functionality in each
	individual component. The policy language was synthesized from a study and
	categorization of sensitive operations in the upcoming HTML 5 JavaScript APIs,
	and full mediation is achieved via the use of deep aspects in the browser.

	We have implemented a prototype of WebJail in Mozilla Firefox 4.0, and applied
	it successfully to mainstream platforms such as iGoogle and Facebook. In
	addition, microbenchmarks registered a negligible performance penalty for page
	load-time (7ms), and the execution overhead in case of sensitive operations
	(0.1ms)."

 - title: "FlashOver: Automated discovery of cross-site scripting vulnerabilities in rich internet applications"
   authors: "Steven Van Acker, Nick Nikiforakis, Lieven Desmet, Wouter Joosen, Frank Piessens"
   longconf: "Proceedings of the 7th ACM Symposium on Information, Computer and Communications Security"
   shortconf: "AsiaCCS 2012"
   date: "2012/05/02"
   doi: "10.1145/2414456.2414462"
   pdflink: "/public/papers/flashover.pdf"
   abstract: "Today’s Internet is teeming with dynamic web applications visited
	by numerous Internet users. During their visits, typical Web users will
	unknowingly use tens of Rich Internet Applications like Flash banners or
	media players. For HTML-based web applications, it is well-known that Cross-
	site Scripting (XSS) vulnerabilities can be exploited to steal credentials or
	otherwise wreak havoc, and there is a lot of research into solving this
	problem. An aspect of this problem that seems to have been mostly overlooked by
	the academic community, is that XSS vulnerabilities also exist in Adobe Flash
	applications, and are actually easier to exploit because they do not require an
	enclosing HTML ecosystem.  In this paper we present FlashOver, a system to
	automatically scan Rich Internet Applications for XSS vulnerabilities by
	using a combination of static and dynamic code analysis that reports no false
	positives. FlashOver was used in a large-scale experiment to analyze Flash
	applications found on the top 1,000 Internet sites, exposing XSS
	vulnerabilities that could compromise 64 of those sites, of which six are in
	the top 50."

 - title: "Exposing the lack of privacy in file hosting services"
   authors: "Nick Nikiforakis, Marco Balduzzi, Steven Van Acker, Wouter Joosen, Davide Balzarotti"
   longconf: "Proceedings of the 4th USENIX conference on Large-scale exploits and emergent threats"
   shortconf: "LEET 2011"
   date: "2011/03/29"
   doi: ""
   pdflink: "/public/papers/hosting-services.pdf"
   abstract: "File hosting services (FHSs) are used daily by thousands of
	people as a way of storing and sharing files.  These services normally rely on
	a security-through-obscurity approach to enforce access control: For each
	uploaded file, the user is given a secret URI that she can share with other
	users of her choice.  In this paper, we present a study of 100 file hosting
	services and we show that a significant percentage of them generate secret URIs
	in a predictable fashion, allowing attackers to enumerate their services and
	access their file list. Our experiments demonstrate how an attacker can access
	hundreds of thousands of files in a short period of time, and how this poses a
	very big risk for the privacy of FHS users. Using a novel approach, we also
	demonstrate that attackers are aware of these vulnerabilities and are already
	exploiting them to get access to other users’ files. Finally we present
	SecureFS, a client-side protection mechanism which can protect a user’s files
	when uploaded to insecure FHSs, even if the files end up in the possession of
	attackers."

 - title: "Bitsquatting: Exploiting bit-flips for fun, or profit?"
   authors: "Nick Nikiforakis, Steven Van Acker, Wannes Meert, Lieven Desmet, Frank Piessens, Wouter Joosen"
   longconf: "Proceedings of the 22nd international conference on World Wide Web"
   shortconf: "WWW 2013"
   date: "2013/05/13"
   doi: "10.1145/2488388.2488474"
   pdflink: "/public/papers/bitsquatting.pdf"
   abstract: "Over the last fifteen years, several types of attacks against
	domain names and the companies relying on them have been observed. The
	well-known cybersquatting of domain names gave way to typosquatting, the abuse
	of a user's mistakes when typing a URL in her browser's address bar. Recently,
	a new attack against domain names surfaced, namely bitsquatting. In
	bitsquatting, an attacker leverages random bit-errors occurring in the memory
	of commodity computers and smartphones, to redirect Internet traffic to
	attacker-controlled domains.

	In this paper, we report on a large-scale experiment, measuring the adoption of
	bitsquatting by the domain-squatting community through the tracking of
	registrations of bitsquatting domains targeting popular web sites over a
	9-month period. We show how new bitsquatting domains are registered daily and
	how attackers are trying to monetize their domains through the use of ads,
	abuse of affiliate programs and even malware installations. Lastly, given the
	discovered prevalence of bitsquatting, we review possible defense measures that
	companies, software developers and Internet Service Providers can use to
	protect against it."

 - title: "ValueGuard: Protection of native applications against data-only buffer overflows"
   authors: "Steven Van Acker, Nick Nikiforakis, Pieter Philippaerts, Yves Younan, Frank Piessens"
   longconf: "International Conference on Information Systems Security"
   shortconf: "ICISS 2010"
   date: "2010/12/17"
   doi: "10.1007/978-3-642-17714-9_12"
   pdflink: "/public/papers/valueguard.pdf"
   abstract: "Code injection attacks that target the control-data of an
	application have been prevalent amongst exploit writers for over 20 years.
	Today however, these attacks are getting increasingly harder for attackers to
	successfully exploit due to numerous countermeasures that are deployed by
	modern operating systems. We believe that this fact will drive exploit writers
	away from classic control-data attacks and towards data-only attacks. In
	data-only attacks, the attacker changes key data structures that are used by
	the program’s logic and thus forces the control flow into existing parts of the
	program that would be otherwise unreachable, e.g. overflowing into a boolean
	variable that states whether the current user is an administrator or not and
	setting it to “true” thereby gaining access to the administrative functions of
	the program.  In this paper we present ValueGuard, a canary-based defense
	mechanism to protect applications against data-only buffer overflow attacks.
	ValueGuard inserts canary values in front of all variables and verifies their
	integrity whenever these variables are used. In this way, if a buffer overflow
	has occurred that changed the contents of a variable, ValueGuard will detect it
	since the variable’s canary will have also been changed. The countermeasure
	itself can be used either as a testing tool for applications before their final
	deployment or it can be applied selectively to legacy or high-risk parts of
	programs that we want to protect at run-time, without incurring extra
	time-penalties to the rest of the applications."

 - title: "Monkey-in-the-browser: malware and vulnerabilities in augmented browsing script markets"
   authors: "Steven Van Acker, Nick Nikiforakis, Lieven Desmet, Frank Piessens, Wouter Joosen"
   longconf: "Proceedings of the 9th ACM symposium on Information, computer and communications security"
   shortconf: "AsiaCCS 2014"
   date: "2014/06/04"
   doi: "10.1145/2590296.2590311"
   pdflink: "/public/papers/monkey-in-the-browser.pdf"
   extendedpdflink: "/public/papers/monkey-in-the-browser.extended.pdf"
   abstract: "With the constant migration of applications from the desktop to
	the web, power users have found ways of enhancing web applications, at the
	client-side, according to their needs.

	In this paper, we investigate this phenomenon by focusing on the popular
	Greasemonkey extension which enables users to write scripts that arbitrarily
	change the content of any page, allowing them to remove unwanted features from
	web applications, or add additional, desired features to them. The creation of
	script markets, on which these scripts are often shared, extends the standard
	web security model with two new actors, introducing novel vulnerabilities.

	We describe the architecture of Greasemonkey and perform a large-scale analysis
	of the most popular, community-driven, script market for Greasemonkey. Through
	our analysis, we discover not only dozens of malicious scripts waiting to be
	installed by users, but thousands of benign scripts with vulnerabilities that
	could be abused by attackers. In 58 cases, the vulnerabilities are so severe,
	that they can be used to bypass the Same-Origin Policy of the user's browser
	and steal sensitive user-data from all sites. We verify the practicality of our
	attacks, by developing a proof-of-concept exploit against a vulnerable user
	script with an installation base of 1.2 million users, equivalent to a
	\"Man-in-the-browser\" attack."
 - title: "Password meters and generators on the web: From large-scale empirical study to getting it right"
   authors: "Steven Van Acker, Daniel Hausknecht, Wouter Joosen, Andrei Sabelfeld"
   longconf: "Proceedings of the 5th ACM Conference on Data and Application Security and Privacy"
   shortconf: "CODASPY 2015"
   date: "2015/03/02"
   doi: "10.1145/2699026.2699118"
   pdflink: "/public/papers/sandpass.pdf"
   abstract: "Web services heavily rely on passwords for user authentication.
	To help users chose stronger passwords, password meter and password generator
	facilities are becoming increasingly popular. Password meters estimate the
	strength of passwords provided by users. Password generators help users with
	generating stronger passwords. This paper turns the spotlight on the state of
	the art of password meters and generators on the web. Orthogonal to the large
	body of work on password metrics, we focus on getting password meters and
	generators right in the web setting. We report on the state of affairs via a
	large-scale empirical study of web password meters and generators. Our findings
	reveal pervasive trust to third-party code to have access to the passwords. We
	uncover three cases when this trust is abused to leak the passwords to third
	parties. Furthermore, we discover that often the passwords are sent out to the
	network, invisibly to users, and sometimes in clear. To improve the state of
	the art, we propose SandPass, a general web framework that allows secure and
	modular porting of password meter and generation modules. We demonstrate the
	usefulness of the framework by a reference implementation and a case study with
	a password meter by the Swedish Post and Telecommunication Agency."
 - title: "Exploring the ecosystem of referrer-anonymizing services"
   authors: "Nick Nikiforakis, Steven Van Acker, Frank Piessens, Wouter Joosen"
   longconf: "International Symposium on Privacy Enhancing Technologies Symposium"
   shortconf: "PETS 2012"
   date: "2012/07/11"
   doi: "10.1007/978-3-642-31680-7_14"
   pdflink: "/public/papers/ras.pdf"
   abstract: "The constant expansion of the World Wide Web allows users to
	enjoy a wide range of products and services delivered directly to their
	browsers. At the same time however, this expansion of functionality is usually
	coupled with more ways of attacking a user’s security and privacy. In this arms
	race, certain web-services present themselves as privacy-preserving or
	privacy-enhancing. One type of such services is a Referrer-Anonymizing Service
	(RAS), a service which relays users from a source site to a destination site
	while scrubbing the contents of the referrer header from user requests.  In
	this paper, we investigate the ecosystem of RASs and how they interact with
	web-site administrators and visiting users. We discuss their workings, what
	happens behind the scenes and how top Internet sites react to traffic relayed
	through such services. In addition, we present user statistics from our own
	Referrer-Anonymizing Service and show the leakage of private information by
	others towards advertising agencies as well as towards ‘curious’ RAS owners."
 - title: "Data Exfiltration in the Face of CSP"
   authors: "Steven Van Acker, Daniel Hausknecht, Andrei Sabelfeld"
   longconf: "Proceedings of the 11th ACM on Asia Conference on Computer and Communications Security"
   shortconf: "AsiaCCS 2016"
   date: "2016/05/30"
   doi: "10.1145/2897845.2897899"
   pdflink: "/public/papers/data-exfiltration.pdf"
   abstract: "Cross-site scripting (XSS) attacks keep plaguing the Web.
	Supported by most modern browsers, Content Security Policy (CSP) prescribes the
	browser to restrict the features and communication capabilities of code on a
	web page, mitigating the effects of XSS.

	This paper puts a spotlight on the problem of data exfiltration in the face of
	CSP. We bring attention to the unsettling discord in the security community
	about the very goals of CSP when it comes to preventing data leaks.

	As consequences of this discord, we report on insecurities in the known
	protection mechanisms that are based on assumptions about CSP that turn out not
	to hold in practice.

	To illustrate the practical impact of the discord, we perform a systematic case
	study of data exfiltration via DNS prefetching and resource prefetching in the
	face of CSP.

	Our study of the popular browsers demonstrates that it is often possible to
	exfiltrate data by both resource prefetching and DNS prefetching in the face of
	CSP. Further, we perform a crawl of the top 10,000 Alexa domains to report on
	the cohabitance of CSP and prefetching in practice. Finally, we discuss
	directions to control data exfiltration and, for the case study, propose
	measures ranging from immediate fixes for the clients to prefetching-aware
	extensions of CSP."

 - title: "Measuring Login Webpage Security"
   authors: "Steven Van Acker, Daniel Hausknecht, Andrei Sabelfeld"
   longconf: "The Security Track at the ACM Symposium on Applied Computing"
   shortconf: "SEC@SAC 2017"
   date: "2017/??/??"
   doi: "10.1145/3019612.3019798"
   pdflink: "/public/papers/loginpages.pdf"
   abstract: "Login webpages are the entry points into sensitive parts of web
	applications, dividing between public access to a website and private,
	user-specific, access to the website resources. As such, these entry points
	must be guarded with great care. A vast majority of today’s websites relies on
	text-based username/password pairs for user authentication. While much prior
	research has focused on the strengths and weaknesses of textual passwords, this
	paper puts a spotlight on the security of the login webpages themselves. We
	conduct an empirical study of the Alexa top 100,000 pages to identify login
	pages and scrutinize their security. Our findings show several widely spread
	vulnerabilities, such as possibilities for password leaks to third parties and
	password eavesdropping on the network. They also show that only a scarce number
	of login pages deploy advanced security measures. Our findings on open-source
	web frameworks and content management systems confirm the lack of support
	against the login attacker. To ameliorate the problematic state of the art, we
	discuss measures to improve the security of login pages."

 - title: "JavaScript Sandboxing: Isolating and Restricting Client-Side JavaScript"
   authors: "Steven Van Acker, Andrei Sabelfeld"
   longconf: "Foundations of Security Analysis and Design VIII"
   shortconf: "FOSAD VIII 2016"
   date: "2016"
   doi: "10.1007/978-3-319-43005-8_2"
   pdflink: "/public/papers/javascript-sandboxing-journal.pdf"
   abstract: "Today’s web applications rely on the same-origin policy, the
	primary security policy of the Web, to isolate their web origin from malicious
	client-side JavaScript.  When an attacker can somehow breach the same-origin
	policy and execute JavaScript code inside a web application’s origin, he gains
	full control over all available functionality and data in that web origin.  In
	the JavaScript sandboxing field, we assume that an attacker has the ability to
	execute JavaScript code in a web application’s origin. The goal of JavaScript
	sandboxing is to isolate the execution of certain JavaScript code and restrict
	what functionality and data is available to it.  In this paper we discuss
	proposed JavaScript sandboxing systems divided into three categories:
	JavaScript sandboxing through JavaScript subsets and rewriting systems,
	JavaScript sandboxing using browser modifications and JavaScript sandboxing
	without browser modifications."

 - title: "Discovering Browser Extensions via Web Accessible Resources"
   authors: "Alexander Sjösten, Steven Van Acker, Andrei Sabelfeld"
   longconf: "Proceedings of the 7th ACM Conference on Data and Application Security and Privacy"
   shortconf: "CODASPY 2017"
   date: "2017"
   doi: "10.1145/3029806.3029820"
   pdflink: "/public/papers/extensions.pdf"
   extendedpdflink: "/public/papers/extensions.extended.pdf"
   abstract: "Browser extensions provide a powerful platform to enrich browsing
	experience. At the same time, they raise important security questions. From the
	point of view of a website, some browser extensions are invasive, removing
	intended features and adding unintended ones, e.g. extensions that hijack
	Facebook likes. Conversely, from the point of view of extensions, some websites
	are invasive, e.g. websites that bypass ad blockers. Motivated by security
	goals at clash, this paper explores browser extension discovery, through a
	non-behavioral technique, based on detecting extensions' web accessible
	resources. We report on an empirical study with free Chrome and Firefox
	extensions, being able to detect over 50% of the top 1,000 free Chrome
	extensions, including popular security- and privacy-critical extensions such as
	AdBlock, LastPass, Avast Online Security, and Ghostery. We also conduct an
	empirical study of non-behavioral extension detection on the Alexa top 100,000
	websites. We present the dual measures of making extension detection easier in
	the interest of websites and making extension detection more difficult in the
	interest of extensions. Finally, we discuss a browser architecture that allows
	a user to take control in arbitrating the conflicting security goals."

 - title: "Raising the Bar: Evaluating Origin-wide Security Manifests"
   authors: "Steven Van Acker, Daniel Hausknecht, Andrei Sabelfeld"
   longconf: "Proceedings of the 34th Annual Computer Security Applications Conference"
   shortconf: "ACSAC 2018"
   date: "2018"
   doi: "10.1145/3274694.3274701"
   pdflink: "/public/papers/raisingthebar.pdf"
   abstract: "Defending a web application from attackers requires the correct
	configuration of several web security mechanisms for each and every web page in
	that web application. This configuration process can be difficult and result in
	gaps in the defense against web attackers because some web pages may be
	overlooked. In this work we provide a first evaluation of the standard draft
	for an origin-wide security configuration mechanism called the \"origin
	manifest\". The mechanism raises the security level of an entire web origin at
	once while still allowing the specification of web security policies at the web
	page level. We create prototype implementations of the origin manifest
	mechanism for both the client-side and server-side, and provide security
	officers with an automated origin manifest learner and generator to aid them
	with the configuration of their web origins. To resolve potential collisions of
	policies defined by the web origin with policies defined by web pages we
	formalize the comparison and combination of web security policies and integrate
	it into our prototype implementation. We evaluate the feasibility of the origin
	manifest mechanism with a longitudinal study of popular websites to determine
	whether origin manifest files are stable enough to not require frequent
	reconfiguration, and perform performance measurements on the Alexa top 10,000
	to determine the network traffic overhead. Our results show that the origin
	manifest mechanism can effectively raise the security level of a web origin
	while slightly improving network performance."

 - title: "LATEX GLOVES: Protecting Browser Extensions from Probing and Revelation Attacks"
   authors: "Alexander Sjösten, Steven Van Acker, Pablo Picazo-Sanchez, Andrei Sabelfeld"
   longconf: "Proceedings of the 26th Annual Network and Distributed System Security Symposium"
   shortconf: "NDSS 2019"
   date: "2019"
   doi: "10.14722/ndss.2019.23309"
   pdflink: "/public/papers/latexgloves.pdf"
   abstract: "Browser extensions enable rich experience for the users of
	today’s web. Being deployed with elevated privileges, extensions are given the
	power to overrule web pages. As a result, web pages often seek to detect the
	installed extensions, sometimes for benign adoption of their behavior but
	sometimes as part of privacy-violating user fingerprinting. Researchers have
	studied a class of attacks that allow detecting extensions by probing for Web
	Accessible Resources (WARs) via URLs that include public extension IDs.
	Realizing privacy risks associated with WARs, Firefox has recently moved to
	randomize a browser extension’s ID, prompting the Chrome team to plan for
	following the same path. However, rather than mitigating the issue, the
	randomized IDs can in fact exacerbate the extension detection problem, enabling
	attackers to use a randomized ID as a reliable fingerprint of a user. We study
	a class of extension revelation attacks, where extensions reveal themselves by
	injecting their code on web pages. We demonstrate how a combination of
	revelation and probing can uniquely identify 90% out of all extensions
	injecting content, in spite of a randomization scheme. We perform a series of
	large-scale studies to estimate possible implications of both classes of
	attacks. As a countermeasure, we propose a browser-based mechanism that enables
	control over which extensions are loaded on which web pages and present a proof
	of concept implementation which blocks both classes of attacks."

 - title: "Isolating and Restricting Client-Side JavaScript"
   authors: "Steven Van Acker"
   longconf: "PhD Text"
   shortconf: ""
   date: "2015/01/06"
   doi: ""
   pdflink: "/public/papers/phdtext.pdf"
   abstract: "In today's web applications, no one disputes the important role
	of JavaScript asa client-side programming language. JavaScript can turn the Web
	into a lively, dynamic and interactive end-user experience. Unfortunately,
	JavaScript canalso be used to steal sensitive information and abuse powerful
	functionality.	Sloppy input validation can make a web application vulnerable,
	allowingmalicious JavaScript code to leak into a web application's
	JavaScript executionenvironment, where it leads to unintended code execution.
	An otherwise secure web application may intentionally include JavaScript froma
	third-party script provider. This script provider may in turn serve untrustedor
	even malicious JavaScript, leading to the intended execution of untrustedcode.
	In both the intended and unintended case, untrusted JavaScript ending up inthe
	JavaScript execution environment of a trusted web application, gains accessto
	sensitive resources and powerful functionality. Web application securitywould
	be greatly improved if this untrusted JavaScript could be isolated and
	itsaccess restricted.	In this work, we first investigate ways in which
	JavaScript code can leak into thebrowser, leading to unintended JavaScript
	execution. We find that, due to badinput validation, malicious JavaScript code
	can be injected into a JavaScriptexecution environment through both browser
	plugins and browser extensions.	Next, we review JavaScript sandboxing systems
	designed to isolate and restrictuntrusted JavaScript code and divide them into
	three categories, discussingtheir advantages and disadvantages: JavaScript
	subsets and rewriting systems,JavaScript sandboxing through browser
	modifications and JavaScript sandboxingsystems without browser modifications.
	We further research the last twocategories, developing and evaluating a
	prototype of each."

---


# Peer-reviewed publications

{% assign currentyear = "" %}
{% assign papers = page.papers | sort: 'date' | reverse %}
{% for paper in papers | sort: 'date' %}
{% assign paperyear = paper.date | split: "/" | first %}
{% if currentyear != paperyear %}
{% assign currentyear = paperyear %}
<h2>{{paperyear}}</h2>
{% endif %}

<div class="paper">
	<div class="title dontcollapse">
		<span class="collapse">&#x25BD;</span> 
		<span class="collapse invert">&#x25B7;</span> 
		{{ paper.title }}
	</div>
	<div class="collapse">
		<div class="authors">{{ paper.authors | replace: "Steven Van Acker", "<span class='authors_me'>Steven Van Acker</span>"}}</div>
		<div class="conf">&raquo; {{paper.longconf}} 
		{% if paper.shortconf and paper.shortconf != "" %}
			({{paper.shortconf}})
		{% endif %}
		</div>
		<div class="doipdf">&raquo; 
		<a class="pdflink" href="{{paper.pdflink}}">download PDF</a>
		{% if paper.extendedpdflink and paper.extendedpdflink != "" %}
			(<a class="pdflink" href="{{paper.extendedpdflink}}">extended version</a>)
		{% endif %}
		{% if paper.doi and paper.doi != "" %}
		    <span class="doi">[DOI:<a href="https://doi.org/{{paper.doi}}">{{paper.doi}}</a>]</span>
		{% endif %}
		</div>
		<div class="abstract"> 
		<div class="teaser">&raquo; Abstract:</div>
		<div class="body">
		{{ paper.abstract | newline_to_br }} 
		</div>
		</div>
	</div>
</div>
{% endfor %}


{% comment %}
# Presentations
* owasp presentations
* HES etc
* hackpra
* swits?
* drads
* secappdev

# Other
* phrack

{% endcomment %}
