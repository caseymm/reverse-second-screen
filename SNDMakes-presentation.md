
Reverse Second Screen 
#SNDMakes Presentation
Team Georgetown
April 9, 2015
Duration: 5 minutes

* Goal: Just enough to get the concept across in an exciting way.
* Approach: Start/end slides, middle switch to live video of two-screen experience.
* Outline below: Indented text is spoken, [] are walkthrough visuals (focus)

### Concept intro (1 minute)
The challenge: 

	[slide with challenge statement]
	When we tell stories, how might we create immersive experiences for users without overwhelming them with either volume of information and gratuitous variety of content types? -- how might we unburden users from the cognitive load of excessive sensory stimuli and information density, while telling a compelling, immersive story that invokes meaningful emotional responses?

	This is a specially challenging problem on longer pieces that demand focus and attempt to engage users in a deeper level of thinking. Enter Reverse Second Screen.

The problem being solved/what Reveser Second Screen does: 

	[transition to Reverse Second Screen title slide]
	Reverse Second Screen takes advantage of a secondary screen to augment the viewing experience on a primary screen by offloading supporting parts of the sensory experience, specifically the content that helps establish mood and context for a story. Let's take a look.

### example walkthrough 1 (2 minutes)
How it works: 
	
	[Show user loading up a new story on phone]
	Here's a long piece about <topic> told primarily thorugh text and photography.

	[show second screen initiating]
	As the user starts reading, their second screen of choice displays photography, abstract shapes or subtly looped video orchestrated with sound to establish a particular mood and overall feeling the story evokes.

	[show user reading on phone and thumbing down page until they reach a trigger point]
	When relevant, this supporting content changes as the user advances. 

	[cut to second screen with changing content]
	The second screen only changes in concert with the users' reading pace, triggered by moments in the story where a different mood needs to be expressed.

	[pull back, show user on phone and secondary screen nearby]

### example walkthrough 2 (1 minute)

	[close in on phone, show user reaching end of story and loading up a new story at the end of the first]
	Some stories, in addition to a particular mood, are enhanced by establishing context through a sense of place and/or time.
	
	[show second screen initiating]
	As the user starts reading, their second screen of choice displays photography, high-level maps, animation or subtly looped video orchestrated with sound to more quickly create that sense of place, engaging the user in deeper reading sooner. 

	[wide: show scrolling on primary and content switch on secondary]
	The second screen never competes for the user's attention: it's not a dual-display story; the second screen is not meant for complimentary data points and artifacts. Rather, it is there for emotional support. The core story stands on its own if the second screen content is not present (graceful degradation), but is enhanced when it is present (progressive enhancement).

#### technical note and wrap up (1+ minute)

	[show blank slide with project summary statement]
	Our prototype illustrates the Reverse Second Screen idea using the browser on two devices. In a full implementation, native software running on a connected device, be that a game console, stereo or in car system, could achieve a more immersive experience.
	
	In this implementation, we used scroll position on the page to trigger events that send asset data to a backend. The backend uses Firebase, which provides web sockets and stores the data. The second screen is synced to the other end of the same data and updates in real time. You can find this project on http://j.mp/Reverse2ndScreen.


#### thoughts from Hassan

	Current technology doesn't allow this experience to work very well. We built it with the concept of skating to where the puck is going, which is toward more interconnected devices. Some of these devices will have screens, some will not. The concept currently runs in a browser, but with more development time, the approach could be used in more native sfotware running on mutiple devices including tvs, stereos, computers, cars or future devices.
	
	
