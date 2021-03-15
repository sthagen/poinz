# PoinZ user manual

This page gives you an overview on the features and most common use cases.

## Table of Contents

  * [The Board](#the-board)
  * [Joining and leaving rooms](#joining-and-leaving-rooms)
     * [Joining a room](#joining-a-room)
     * [Leaving a room](#leaving-a-room)
     * [Removing other users from the room](#removing-other-users-from-the-room)
  * [The Story Backlog](#the-story-backlog)
     * [Adding stories](#adding-stories)
     * [Importing stories](#importing-stories)
     * [Editing stories](#editing-stories)
     * [Trashing stories](#trashing-stories)
  * [Estimating](#estimating)
     * [Manually reveal estimates](#manually-reveal-estimates)
     * [New Round](#new-round)
  * [Settings](#settings)
     * [User Settings](#user-settings)
     * [Room Settings](#room-settings)
  * [Security](#security)
   


## The Board

The board contains the [**Backlog**](#the-story-backlog) (list of stories on the left). The [**Estimation Area**](#estimating), where we see all users in the room as well as the currently selected story (in the middle). Optionally the [**Settings**](#settings) menu or the **Action Log** on the right.

![The Board](https://user-images.githubusercontent.com/1777143/97100788-84ded180-1697-11eb-9737-6ef82b5fc73b.png)

## Joining and leaving rooms

### Joining a room

You can join a room in three different ways

1. Visit the [landing page](https://poinz.herokuapp.com/) and click the big button **"Join new room"**. You will join a new room with a randomly assigned unique room id.
2. Visit the [landing page](https://poinz.herokuapp.com/), extend the form and enter a custom room name, then hit Enter or click the join button. If the room with this custom name (the room id) already exists, you will join it. Otherwise a new room is created.
3. Join a room directly by visiting the room url. (e.g. https://poinz.herokuapp.com/test   or  https://poinz.herokuapp.com/a-random-room-id-here). If the room with this name/id already exists, you will join it. Otherwise a new room is created.

PoinZ will ask you for a username on your first visit. Afterwards your username is stored in the LocalStorage of your browser and reused on subsequent joins.

![Join Room Form](https://user-images.githubusercontent.com/1777143/97100613-89a28600-1695-11eb-9d03-94a482cc0678.png)

### Leaving a room

You can leave a room by clicking the **leave** button in the top right corner. If you close your browser window or tab while you are in a room, other users will see you as "disconnected".

![TopBar Quick Menu](https://user-images.githubusercontent.com/1777143/97100648-dd14d400-1695-11eb-88ac-53540c09608d.png)
![Disconnected Users](https://user-images.githubusercontent.com/1777143/97101301-94144e00-169c-11eb-9dc8-bfc5ed949c6a.png)

### Removing other users from the room

You can remove ("kick") other users from the room:

1. First click on the avatar of the user
2. Click on the **leave** button on the right to kick the user. If you click the **cross** on the left, you cancel the action and the user stays in the room.


![Kick User](https://user-images.githubusercontent.com/1777143/97100674-4b599680-1696-11eb-94a0-892d65e43219.png)


## The Story Backlog

The story backlog contains all stories added or imported to your room. The story currently selected for estimation is marked with a **orange bar** on the left.

### Adding stories

Simply fill in the form on the top left. The *Title* is mandatory, the *Description* is optional. Any url in the description will be rendered as clickable link.

### Importing stories
 
Drag and Drop a csv file with stories (e.g. an export from Jira) on to the backlog.
The csv file should contain column headers on the first line.

Example:
```
key,title,description
ISS-123,The Title, some Description
ISS-554,Another Story, With a description
```

PoinZ uses [papaparse](https://www.papaparse.com/) to parse the given csv file.

### Editing stories

Hover a story in the backlog (or tap the story on your mobile device), in order to see a button with a **pencil** icon on the top right. Click on the pencil to enter the edit mode.
You can edit the title and the description of the story and save or discard your changes.

![Edit Story](https://user-images.githubusercontent.com/1777143/97101051-3c74e300-169a-11eb-8fce-6d0495421229.png)
![Edit Story Form](https://user-images.githubusercontent.com/1777143/97101074-75ad5300-169a-11eb-96a0-d50ce8543040.png)

### Trashing stories

Hover a story in the backlog (or tap the story on your mobile device), in order to see a button with a **trash can** icon on the top right. Click on the trash can to move the story to the trash.
Switch to the list of trashed stories by clicking on **Trash (N)** on the top of the Backlog. You can **restore** a trashed story or **delete it permanently**!


## Estimating

Only a single story can be estimated at a given time.
 
1. Click the story you want to estimate in the **Backlog** and click the blue **Estimate** button.
2. The board now shows the selected story. All users see the same story selected on the board. In the backlog, the selected story is marked with an orange border on the left.
3. Estimate the story by clicking one of the colored cards. By default the cards have the values ?, 1/2, 1, 2, 3, 5, 8, 13, 21, 34, 55, BIG.
4. By default, the given estimates are *revealed* as soon as all active users did estimate. This behaviour can be changed in the settings (Auto Reveal).

### Settle

In many cases, your team does not "agree" on a value in the first round. You can discuss and then "settle" the estimation: **Click on one of the highlighted cards to store that value on the story.** 

### New Round

If you do not want to settle right away, you can start a new estimation round by clicking the blue **new Round** button.
All previously given estimates on the currently selected story are **erased**, and your team can start estimating again.

![new round](https://user-images.githubusercontent.com/1777143/97101245-0e909e00-169c-11eb-81f5-80a0c094014c.png)


### Consensus

If all users estimated the same value, *consensus* is achieved, and the story will display a colored *badge*.

![consensus](https://user-images.githubusercontent.com/1777143/97101160-4ba86080-169b-11eb-997d-57b5648e6ff8.png)

### Manually reveal estimates

You can *reveal* the story at any time by clicking the blue **Reveal** button. Even if not all users in the room did estimate. PoinZ then displays all given estimates for this story (visible for all users).

![reveal](https://user-images.githubusercontent.com/1777143/97101241-08022680-169c-11eb-97de-9a27244c3dca.png)

## Settings


### User Settings

These settings will affect your user.

<img src="https://user-images.githubusercontent.com/1777143/98459634-fc832500-219c-11eb-9c24-dac484541e86.png" width="150" />


#### Avatar and Email

Choose an avatar to be displayed in the Estimation Area, visible for all users in the room.
If you set an email address that is registered with https://gravatar.com, the gravatar "Icon" will be used. This overrides any selected PoinZ avatar.

#### Excluded

If you mark yourself as "excluded", you do not take part in estimating stories. If auto reveal is enabled, PoinZ will "ignore you" and reveal the story as soon as all other users did estimate the current story.
You can still modify the backlog and [settle](#settle). This is helpful for Scrum Masters / moderators.

### Room Settings
These settings will affect the room and thus all users in the same room.

<img src="https://user-images.githubusercontent.com/1777143/98459633-fbea8e80-219c-11eb-863b-c27d9a6b8f87.png" width="150" />


#### Auto Reveal

By default, PoinZ will reveal the current story automatically (all given estimation values are shown) as soon as all users in the room did estimate the current story (**Excluded** and **Disconnected** users are ignored).

If this flag is removed, Poinz will not auto reveal and you can manually reveal the story.

#### Password Protection

By default, everybody can join your room. You can optionally set a password in order to protect unauthorized access to your room.

**During creation**

When creating a new room, extend the "Join" button and set a new password (second input field, "Optional password). Users will then be prompted for the password when they are joining your room.

<img src="https://user-images.githubusercontent.com/1777143/105578774-d70cbd00-5d82-11eb-9d25-ee48b6d5d4bf.png" width="300" />

**Existing Room**

For an existing room without password protection, the room settings allow you to set a new password. You can also override an existing password.
If you click the save button with an empty password field, you remove the password protection of that room.

<img src="https://user-images.githubusercontent.com/1777143/105578826-379bfa00-5d83-11eb-9a34-6fea1abcd9d3.png" width="300" />


#### Custom Cards

<img src="https://user-images.githubusercontent.com/1777143/98459768-238e2680-219e-11eb-9c05-c8d734fe2c81.png" width="150" />

If the default set of cards does not meet your needs, you can change it. 

* Label (first column) can be any string
* Value (second column) must be a number. Make sure that the values are unique
* Color (thrid column) can be any css valid color string (hex, rgb, named)

You can also use the text editor and edit the json array directly.


## Security 

By default, everybody that knows the name/ID of your room can join your room, without further authorization. 

> **This means, anonymous people can read, modify and delete your stories as soon as they know the room ID.**

This is by design. When we created PoinZ, we wanted a most simple solution, without the hassle of registration and user management.

However, you might want to protect your data in some way. See ["Password Protection"](#password-protection) for more information.

At any time, you are using PoinZ at your own risk!
