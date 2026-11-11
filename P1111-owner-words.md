# P1111: the owner's own words

What the owner said on 2026-11-10 and 2026-11-11, in a chat with Claude, dictated by voice.
[P1111.md](P1111.md) is built from it. The words are his, grouped under headings and lightly
tidied for reading: repeats and filler cut, small slips of grammar fixed, nothing added.
**When P1111.md and these words disagree, ask the owner.**

Read them for intent, as [owner.md](owner.md) says: dictation mishears a word here and there
("truncated format" is the ranked format, "rhyme room" is a room with friends, "Tashkent
religion" is Toshkent viloyati).

---

## 1. Why this plan (2026-11-10)

> I was working on this project, and it has been a pretty while since I started it. And this
> project is kind of going, kind of not finishing. And I don't like it, to be honest. Currently
> it's a little bit messed up. It has the main things I want. For the most part, it's done. But
> it's not the thing, you know. Let's say 70% of what I wanted, the functionality, is done. But
> I want to fully finish it in this month. […] Most of the code is written kind of AI slop. Not
> exactly, but it's not the exact thing what I want. We need to improve it.
>
> I want to finish it. I don't want it going on; it's a thing that keeps in my mind, and it's
> taking energy from me. I want to make what I want, finish it, and get away with it. I have
> other things to do. I don't want it to take much time every day from me.
>
> I'm trying to use Fable with sub-agents: on top there is Fable, and then he can use Opus,
> Sonnet, and he will get the job done.

## 2. Who it is for, and the license (2026-11-11)

> My original ideas were not about doing more than authentication with Telegram. Telegram was
> mostly about personification.
>
> I want this game to be played by all Uzbeks, a lot of people, not just my friends. I'm gonna
> buy the Yandex API key soon. Currently I didn't buy it yet, because I didn't see the project
> finished. When I see the project as I want it, as I fully finish it, the full picture, I will
> buy the Yandex API. Till now, I think we can just work with the free developer API key.

## 3. Taste, and where the game came from

> I like Steve Jobs' vision, taste. The customer being the main focus, and the one thing at a
> time thing. Customers should use something simple. At one time they should do one thing. And
> things being simple and easy to use, intuitive.
>
> I wanted to learn geography, and I found this GeoGuessr game. I played it here and there,
> and I really wanted to play it in my own country. In GeoGuessr, Uzbekistan is not included,
> because Google's coverage is not good enough. It's very tiny. But Yandex's coverage is pretty
> wide in Uzbekistan compared to Google. So I really wanted to play it in my home country.
> Who doesn't want it? And it's more useful. And I knew I'm not alone in Uzbekistan, in
> Tashkent, who doesn't know his country well enough, just lives, goes to work, just does his
> job and the everyday thing. But life is more than that. You should learn, you should be
> curious about your country.
>
> The current situation you see in the GitHub repositories: they are pretty good, they are
> okay, they are fine. But now I want to describe to you what I want, the product.

## 4. Place-in-parent

> The first component, I named it place in parent. We have this SVG of Uzbekistan and regions.
> I'm a really visual person. I want to represent and show things, not just type something. I
> want to show. That's why we were using SVG, to show how it actually is on the map, and give
> them patterns, visual things, so they can easily remember it.
>
> It's an SVG of the place with the parent. Let's say we want to show Tashkent region as a
> place in parent. We will show the Uzbekistan SVG, and we highlight, in a selected colour, the
> Tashkent region, and this way we show where it's located. If we want to show Tashkent as a
> place in parent, we show Tashkent region, and in it we highlight Tashkent. If we want to show
> something like Yunusobod, we show Tashkent and we highlight the Yunusobod part.
>
> This makes it easily recognisable. You may not know the shape of Bukhara, you may not know
> the shape of something, but by looking at its parent and the selected part, you can
> recognise it easily. That's how I assume our customers are gonna be.

## 5. The home: four tabs

> I am seeing 3 or 4 tabs at the bottom of the screen.
>
> **The first** is a rating thing, where you can play 1 versus 1 with others, with random
> people, for rating, for Elo. And you can only play in Uzbekistan because it's about rating.
> Maybe you just want to play in Yunusobod, let's say. It's also possible. You can just select
> one and play in it, but you don't get Elo. It's just playing with random people for fun. This
> tab is mostly about 1 versus 1. Maybe later we can add, not for rating, just for fun,
> multiple players, like 10 or 12. Maybe, not sure.
>
> **The second** tab is the room, the friends thing. You will create a room, you will see your
> connected people, friends, and you guys can play together. It's one of the most interesting
> and most useful things: we know each other, we want to play with people we want. I think
> humans like rivalry, competition. That's what grows people. Not for rating, just for fun
> with the people we know. The main thing here is fun with friends.

## 6. The map, and picking places

> In the top and the left part of the screen we can show some things, I'm not sure what, but
> on the right and the main part of the screen, really the main part, we will show the SVG of
> Uzbekistan.
>
> About places: currently it's implemented with a banner, and it's a misunderstanding. I don't
> like those banners and the style of those banners. We need to improve that style, the fonts,
> and do something better.
>
> In the friends tab we want to select more than one place. The SVG of Uzbekistan is shown.
> By clicking in it, we go into it. By clicking Tashkent region, you go into it, and it will
> show deeper things, its districts, and so on. You can go all the way in. And when you go in,
> there will be a button, select. By clicking on it, you select that place. Let's say I go
> into Tashkent and select Yunusobod. After that, Yunusobod is selected, and it will be shown
> on the left part of the screen, where there will be a list of places. In the first place
> there will be the place in parent of Yunusobod, so it's easily recognisable. And we can go
> on. Let's say we also want to add Bukhara: we are people from Bukhara, and we also live in
> Yunusobod. And maybe we recently went to Samarkand, and we want to select Samarkand too. We
> can add as many places, as deep, as high as we want, and it's playable, and we will randomly
> play each of them.
>
> In the rooms tab, I see how many friends we have on the top, because the main thing is given
> to the map.
>
> In rooms I was thinking only about everyone for themselves. Maybe we can add a teams thing:
> two people, me and you, and three in the other team. I'm not sure. If it's really needed and
> not that hard to implement, we can add it. Otherwise we don't have to. It's just an idea.
>
> When it's showing Uzbekistan, there will not be any back button. But when we click on
> Bukhara or Tashkent region, we get into that place, with its districts. And on the top left
> part, in a tinier square, we will show Tashkent region as a place in parent, which makes
> users easily recognise where they are. And by clicking on that square, they will go back.
> It's like a back button. If we are in Tashkent, on the top left there will be Tashkent as a
> place in parent: Tashkent region, with Tashkent highlighted. By clicking on it we go back
> and Tashkent region is shown, and by clicking once again we go back to Uzbekistan.
>
> When selecting multiple places, it would be good if we highlight them on the map as well,
> maybe in a different colour. We need to show that it's a selected thing.
>
> The SVG map is what we truly need, because it makes it really easy for our players: easily
> recognisable, the pattern, the visualisation. And it will be useful in life too.

## 7. Learning

> The third one is about learning. In this project's description I have given you two other
> projects other than GeoGuessr. I have played them. They are really good to learn with. They
> have quizzes, patterns, visualisations, and I like it. I want you to go and understand them.
>
> The first one is StudyGe. This is a really useful one. A map of the world is shown, and you
> can learn countries, names, flags, capitals, and you should select them on the map. That's
> really clever, really visual, intuitive, and there is a pattern there; I really like it. And
> the other one, its name is Squiz. It's like a quiz, but it's also useful, making it a bit
> easier. In some cases we can use it.
>
> This app should help others to learn about geography as well, the geography of the world:
> the visualisation, where it's located and the shape of it, its flag, its name, the country's
> capital, and so on.
>
> As I said, we really like competition. These games also could be played with friends. Two
> friends want to compare themselves, how good they are, and they will play live, one versus
> one, let's say capitals or flags. But you don't have to mess up the room stuff: I was
> thinking about not adding this in the room tab, but adding an option in the learning part.
> You go to the learn tab, you select the quiz, and there will be a tinier option, a room with
> friends. By clicking on it, they go to the room tab, and everything is set. They can change
> something, configure something, and the friends will come and they will play one versus
> one, maybe multiple players. We will give them points, and we will also calculate the time
> when they finish it.
>
> One of the main things: they should be able to learn and test themselves in Uzbekistan too.
> The SVG of Uzbekistan is given, and there will be the name of a region, let's say Bukhara or
> Tashkent, and they should click on it. And even deeper, for districts. I want to learn every
> district in Tashkent, and this is also possible. This is the style of StudyGe.
>
> It would be really good if we could go even one step deeper. We have regions, we have
> districts, and mahalla, kvartal. It's one step deeper and it makes it truly high level. If
> we can do it by also representing it in SVG, going deeper and showing it visually, making it
> intuitive, that would be really good. Think about it.
>
> We can make it in levels. In the first level you should just find regions. In a second
> level, we'll give just the name of the district, like Yunusobod, and they will be given the
> SVG of Uzbekistan. They will click on Tashkent and then click on the district. So it's not
> one step, it's two steps. And maybe it's Jondor: they will go to Bukhara and select it
> there. Knowing every district in Uzbekistan: that would be really awesome.
>
> About the world, we don't have to go that deep. Basic things from the world. But we should
> go deeper in Uzbekistan because it's our nation, it's our place, and we want to help our
> people to learn our places, and abroad. The geography of where we live, what we use, what
> we need.

## 8. Profile

> As the last tab, I was thinking about the profile. Changing here and there, the settings
> part. Currently only emojis are available there. The intention was actually having a profile
> picture if they wanted, but if they don't have one, giving them something easily
> recognisable, distinguishable. That's why I wanted emojis: for random guests, or someone who
> didn't upload any picture of themselves. But currently we can't have any profile photo, and
> it's a little bit off. I think we need to fix it.

Asked how (2026-11-11):

> If you mean uploading a photo from them, yeah, like other games, we should do it. In
> GeoGuessr it is not possible, but they have avatars and many ways of customisation. We
> don't, so we should give them the option to upload a photo. To store the photo we can use
> the Postgres database, or we can upload it to a Telegram chat and use it from there, or if
> our project needs file storage anyway, we can just use MinIO.

## 9. Smaller things

> **The 5K.** In GeoGuessr, the original game, it has a really cool animation and I like it,
> and I think we need to have such an animation too, for 5K.
>
> **The look.** GeoGuessr has really good design, really good taste, really good fonts. I
> really like their text fonts. Really cool, really gamified, truly cool, to be honest. We
> need to have such things too. We have some lacks about these fonts.
>
> **The banner.** The banner part actually sucks. Actually I didn't want a banner there, I
> wanted it as an avatar showing place in parent, making it easily recognisable. I randomly
> said banner, and that's what Claude Code implemented. That's not bad actually, but that
> wasn't what I wanted, my intention.
>
> **The compass.** Let's say we are playing non-NMPZ. When you click on the compass, it will
> directly look at the north, without changing the angle vertically. It changes the angle
> horizontally, looking directly to north. Keep in mind, it will just change the angle
> horizontally. It would be really cool, actually.
>
> In a room you can select the compass type, and it's truly weird, because everyone will
> select their compasses in their profile. So we need to remove it from the room.
>
> **Guests' names.** There will be a lot of guests. The problem I see is when guests get in
> and couldn't change their names, and they can't fix it later, while the game is going and
> didn't finish, or they didn't get out of the room. I want you to make it possible: even
> when the game is going, guests can change their names. If it's a little bit odd, make it
> possible after they guess. Only for guests.
>
> **Buses.** One more idea for the learning tab, which might be useful for many people. In
> Tashkent or Tashkent region, the route of the bus is shown, and they should identify which
> bus it is. Is it 115, or is it 14, or some other bus? There are a lot of buses. It will be
> useful for a lot of people to identify buses, where they go, by just seeing their paths on
> the SVG of Tashkent. We don't have to do it for every bus. We need to do it for the very,
> very popular buses. There are such buses, truly popular, pretty much everyone knows them, or
> buses used a lot, that go to really popular places. Not every bus, but the popular, needed
> ones.

## 10. The answers that settled it (2026-11-11)

- **Mahallas:** *"Ok, if you mean mahalla just for Tashkent, not the whole of Uzbekistan."*
- **Teams, and 10–12 random players:** left for after the finish. *"Ok, fine."*
- **Buses:** *"I think this is gonna be really useful. I think we should do at least top 10;
  if you can, the recommended top 30."*
- **Nobody online in ranked:** *"Playing someone's recorded game is not needed. Just let him
  know about the current situation, that's it."*
- **Quizzes with friends:** *"This month."*
- **The look:** the whole look, not only the fonts.
- **Barg and the shop:** *"Do the recommended thing, I leave it up to you."* They stay as
  they are, under the profile.
- **The ranked format:** *"I would rather choose GeoGuessr-style rounds, where you play until
  the opponent's health is gone."*
- **The risks** (map data for mahallas and buses unchecked; the new look touching every
  screen): *"I think they are pretty fine."*
- **How to build it:** *"I want to use Fable, which is smart, really smart … I want Fable to
  be above it all, using sub-agents like Opus, Sonnet … a supermind, mastermind above all
  models. About the games I mentioned in the description, let Claude Code do some research
  about them, and about those two risks. I have a lot of tokens, and they need to do it like
  a product. The tokens don't matter. Make it perfect. Make it the way I want. Also give them
  my intentions, what I want."*
