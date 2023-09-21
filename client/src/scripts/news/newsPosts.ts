/* eslint-disable quotes,@typescript-eslint/quotes */
import { type NewsPost } from "./newsHelper";

export const news: NewsPost[] = [
    {
        date: 1694706686000,
        author: "H.A.Z.E.L",
        title: "Broadening our horizons",
        bannerImage: "./img/news/v0.10.0.png",
        content: `We here at H.A.Z.E.L have broadened our horizons, and expanded our operations to an island entirely covered by the savannah! DMR's and snipers reign supreme here in the savannah! But the real estate value is abysmal, meaning no more houses around the island...<br><br>

We've also began experimenting with a new, lighter form of transporting oil, the propane tank! These tiny barrels are convenient for transporting oil due to the scarcity of oil on this island. But their smaller size means they could theoretically be exploded much easier than regular barrels...<br><br>

*End transmission*<br><br>
"We have some bad news. During transportation the flint crate was... damaged to say the least. But I know the combatants won't assume anything out of the ordinary.."`,
        longContent: `<h2>re-savannah mode v0.1.0</h2>

<h3>New features & changes</h3>
<ul>
  <li>Surviv.io's iconic savannah mode is back in all of it's glory! This includes:</li>
  <li>More guns! Added 4 guns: the Stoner 63 (a LMG), SR-25 (a DMR), ARX-160 (an assault rifle), and Mini-14 (a DMR).</li>
  <li>Rewrite! The game has been rewritten to use Pixi.js (a different rendering engine), and a custom physics engine, which should improve performance a lot.</li>
  <li>Better bullets! Bullets now reflect off of metal surfaces. Bullet collisions are now calculated client-side, making them more accurate.</li>
  <li>Beaches & ocean! The island is now surrounded by beaches and ocean.</li>
  <li>More & better particles! Players now emit particles when using healing items. Added bullet shell particles and muzzle flash. Obstacle hit particles now show in the correct locations.</li>
  <li>Better sounds! Sounds now play more reliably. Sound falloff has been added, meaning further away sounds are quieter, and a subtle stereo effect has been added.</li>
  <li>Place names! There are now named places on the map, like in surviv.io.</li>
  <li>Fixed an issue causing the game to freeze for a few seconds every round.</li>
  <li>New servers! The main, North America server has been upgraded from 2 cores and 2 GB RAM to 4 cores and 4 GB RAM. The Europe server has been upgraded to 4 cores and 8 GB RAM.</li>
  <li>Added 3 new skins and 1 emote.</li>
  <li>Made the warehouse and porta potty entrances more obvious. Added holes to the house roof.</li>
  <li>Your rank is now shown on the game over screen.</li>
  <li>Better hitboxes! Hitboxes and viewports have been fixed and adjusted.</li>
  <li>New pine tree texture.</li>
  <li>Added unique pickup sounds for healing items and scopes.</li>
  <li>Fixed issues with auto loot pickup on mobile.</li>
  <li>Fixed the force required to activate the right joystick not changing with joystick size.</li>
  <li>Added an option to loop when switching scopes, disabled by default.</li>
</ul>

Special thanks to Leia and platonthek. This update wouldn't have been possible without them.`
    },
];
