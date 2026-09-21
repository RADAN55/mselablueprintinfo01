# The Blueprint / El Plano · K–12 edition

A bilingual (English and Spanish) magazine on the Mississippi ELA standards and MAAP test blueprints, kindergarten through grade 12.

**EL Publishing · Many Voices · One Storm**

## What is in this folder

| File | What it is |
|---|---|
| `index.html` | Home: cover, editor's letter, contents, the K–12 skill ladder, how to read a blueprint |
| `k-2.html`, `3-5.html`, `6-8.html`, `9-12.html` | One issue per grade band. Each grade has its floor plan or focus map, review notes, word bridge, video shelf, a practice set, four-lane supports, a writing task, a family page, and a link to its Grammar Beats |
| `today.html` | Today: pick a grade and get a five-minute opener (beat of the day, question of the day, Monday Move of the week). Advances one step each school day |
| `search.html` | Search and standards finder across the whole site. The search box in the top bar sends you here |
| `beats.html` | Grammar Beats hub: one card per grade, K–12 |
| `gradeK-beats.html`, `grade1-beats.html` … `grade12-beats.html` | Grammar Beats for each grade: five-minute chant sessions, a "Name That …" projector game for every beat, a click-track metronome, and Spanish transfer notes. Every grade has one beat per standard: 26 for grades 3–11 (every beat in every grade has a song with a playable melody and a Latin groove; grade 5 also has the recorded album), 28 or 29 for K–2 (which add foundational skills), and 28 for grade 12 (which adds two college-writing standards) |
| `grade3-album.html` … `grade8-album.html`, `grade10-album.html` | Ritmos de gramática, Vols. 1–7: 26 grammar tracks for each MAAP-tested grade (3, 4, 5, 6, 7, 8 and 10) over salsa, cumbia, merengue, reggaetón and bachata. "With guide voice" plays the MP3s in that album's audio folder; "Band only" generates the backing track in the browser |
| `audio/` (grade 5), `audio-g3/`, `audio-g4/`, `audio-g6/`, `audio-g7/`, `audio-g8/`, `audio-g10/` | 26 MP3s each (`01.mp3` to `26.mp3`), one folder per album. **Upload these folders with the site** or an album falls back to band only |
| `monday-moves.html` | Monday Moves: thirty-six weekly five-minute moves for classroom teachers of any subject, by quarter, each with three steps, examples by department, and four-lane versions |
| `monday-moves-quarter-1.pdf` … `-4.pdf` | Four designed nine-page PDF packets, one per quarter. They sit beside the pages, not in a folder. The page can also print any quarter by itself |
| `teachers.html` | Teacher's companion: bilingual learners, special education, four lanes, writing rubric with annotated samples, points calculator, 45-minute PLC agenda |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Publish on GitHub Pages

1. Create a new public repository (for example `elblueprintk12`).
2. Unzip this package. On GitHub choose **Add file → Upload files** and drag in **all the `.html` files, `README.md`, `.nojekyll`, and the four `monday-moves-quarter` PDFs**. Commit. Then upload the seven audio folders, **two or three folders per drag**, because each holds 26 files and GitHub takes at most 100 files at a time: for example `audio` + `audio-g3` + `audio-g4`, then `audio-g6` + `audio-g7` + `audio-g8`, then `audio-g10` (dragging a folder keeps it a folder). Commit.
3. Settings → Pages → Build and deployment → Source: "Deploy from a branch" → Branch `main`, folder `/ (root)` → Save.
4. After a minute the site is live at `https://radan55.github.io/<repo-name>/`.

Every page carries its own styles and scripts, so there is no assets folder. Keep the file names exactly as they are, because the pages link to each other by name. GitHub's web uploader accepts up to 100 files at a time and this package has about 215 (roughly 150 MB), which is why the audio folders go in separate drags. If that is more uploading than you want, the site works without any audio folder: each album simply plays band only.

## Classroom tools

Every page has a **Projector** button in the top bar. It enlarges the page, hides the navigation, and opens a dock with a countdown timer and a random student picker (the class list you type is stored only on that device). On any Grammar Beats page, **Present** on a card shows that one beat by itself, with arrows to move to the next.

## Before you promote it

- Open the live site once and confirm the fonts load, a Listen button speaks, a Name That game runs, and the album plays with the guide voice.
- Video links are YouTube searches. To use specific videos you have previewed, replace the `href` of the matching link in the band page.
- Have a second Spanish reader review the text, then add their credit to the footer of each page.
- Student answers are saved in the browser on that device only. "Start over" clears a grade.

## Songs, games and album

Lyrics, coros, versos, chants and game clues are original to this magazine. The songs use eight traditional public-domain melodies in grade 5 and three of them (Hot Cross Buns, Frère Jacques, Twinkle) in the other grades; every line was checked against its melody’s syllable count. The album's Latin backing tracks are generated by the page's own synthesizer, and the guide voice is computer-generated speech (Piper text-to-speech, English and Spanish voices). Two game clues quote the Declaration of Independence and the Gettysburg Address, which are in the public domain. Classes may record, post and share their performances.

## Sources

Blueprint percentages, item counts, points, and times come from the Mississippi Department of Education's MAAP English Language Arts Updated Blueprints (starting 2021–2022), checked September 19, 2026. Practice passages, items, and sample responses are original and are not released MAAP items.

This is an independent EL Publishing magazine. It is not issued or endorsed by the Mississippi Department of Education.
