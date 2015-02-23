title: Hello-World
date: 2015-02-21 21:11:04
tags:
categories: Misc
comments: true
---
<img id="HelloWorldOldNew" src="/2015/02/21/Hello-World/old-out-new-in.jpg"> Out with the old in with the new! Or at least that's how the old adage goes.  I've been sitting on this web domain for two or so years now, trying to figure out what to do with it.  The main reason I hadn't done much up to this point has more to do with the costs to host a site given the web technologies I desired to play around with, rather than the lack of motivation.  Of course my idea of keeping costs down pretty much meant I didn't really want to pay anything at all!
<BR />
I sat down a year ago and tried to come up with the various ways I could cheaply host my personal website and also take advantage of the cool new cutting edge frameworks and programming languages popping up everyday.  I started exploring the popular cloud services such as *AWS, Microsoft Azure, and Google App Services*.  All three offered comparable options and at relatively low costs given the services they are providing.  But I wasn't ready to take on the added expense of hosting a personal website just yet.
<BR />
While exploring cheap hosting options I came across the concept of 'Static Site Generators'.  This was nothing new had has been around for quite some time. A Static Site Generator or (SSG) is a tool that takes a collection of files in one format, usually Markdown (MD) and converts them to another, usually HTML.  The result is an extremely fast, consistent website that can be hosted by any webserver regardless of platform.  An additional benefit of a static generated site is that your website pages can easily be versioned using a source control tool since the entire site is nothing more than flat text files.
<BR />
After exploring everything I could learn about SSG's I was convinced this was the route I wanted to take.  Of course there were some obvious downsides I had to live with.  Static Websites are exactly that... Static.  This meant I couldn't use any server side programming languages, or serve any dynamic content. When I really sthought about what this meant, I realized the only thing I'd likely be using dynamic content for were user comments and I already knew there were options out there to get around this limitation.
<BR />
At this point I just needed a cheap way to host the site. **Enter Github Pages!!!**  As a developer I was already familiar with <a href="http://www.github.com">Github</a> as an online Source Control repository for hosting public and private projects.  One of the features github provides is Github pages.  Every User and/or Organization gets one website per account that's served by <a href="http://www.github.com">Github</a> for no charge at all.  This is exactly what I was looking for!  All I needed now was to figure out how to set it all up.
<BR />
In my next article I'll go into detail about the following:
- How I went about choosing an SSG
- Details about setting up and using the SSG
- Publishing the generated site content to github pages so your site is publicly available.
</br>
