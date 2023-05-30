---
layout: page
title: Index
permalink: /
---

# Multiscript for [The-West](https://the-west.net)

User script for the online browser MMORPG game The-West providing many
quality of life improvements, that make every day better. Script is published
on [Greasyfork](https://greasyfork.org/en/scripts/463488-multiscript-the-west) as well as on [Github](https://github.com/ra1g-eu/ra1g-eu.github.io).


## Features of Multiscript

### QuickFeatures window {#}

![QuickFeatures](https://ra1g.eu/multiscript/gp_quickFeatures.png "QuickFeatures window")

QuickFeatures provide quick access to church building in game (if you are in town),
quick access to sending event currency to all your friends and a button to instantly log you out.

Players can start building church by either clicking manually on each button in second row,
to place 1 job into the task queue at a time, or by clicking either of the 3 buttons
in the top row, the script will automatically add as many jobs as possible
(depending on energy available, whether or not task queue is full, if automation is available).

Demonstration can be seen below:

<video autoplay muted loop src="https://ra1g.eu/multiscript/gp_autoBuild.webm" width="500">
</video>

### Job Enhancer

![JobEnhancer](https://ra1g.eu/multiscript/gp_jobWindow.png "Job window")

Job window now has extra functions and features useful for so-called "spamming" or "grinding".
Image below shows new 9x and 7x buttons, that add 9 and 7 jobs to the task queue.
Available are now 3 comboboxes, each of them letting the user select a set.

- first combobox is for selecting a "labor points" set, ie: a set in which you would start your job (while farming XP, money etc.)
- second combobox is active only if a set is selected, and if selected, acts as an intermediate set.
    - after clicking 9x or 7x button, Multiscript will start selected job in labor points set
    - after a delay, it switches to this intermediate set
    - after another small delay, it switches to 3rd selected set
- third combobox is for a grind set, ie: a set in which you want to finish the job (XP set, money set, luck set etc.)

Travel button is for travelling to the selected job. Multiscript will pick a job with the
lowest level, in the job group of your selected job and if you have saved a speed set
in settings, it will travel there after a small delay. Upon reaching your
destination, it will cancel the job.

### Town Log enhancer

![TownLog](https://ra1g.eu/multiscript/gp_townLog.png "Town Log enhancer")


This feature enhances existing town log in the game and allows the player to
go through every page of the town log, showing only report that do not contain
construction logs (works only with English language).

Player has the choice to load all logs, in which case there is a request made
every second, its results are saved and after loading all logs, only non-construction
logs are shown. 

All loaded logs can be exported and then imported by other players.



