---
title: /fight
---

`/fight` is a command available to those with the [/user/](/reference/roles/#user) role.

## subcommands

### **enemy**

`/fight enemy [location] (modifier)` engages the user with a one-off encounter with an enemy. This has a two minute cooldown across the board, but will be adjusted depending on difficulty at a later date. This takes place in the channel `#arena`.

#### [required] location

-   storyNET
    -   This area is dedicated to progressing the story experienced when running `/cyberelia`. While some story progression may happen in other areas, this is the main area.
-   HoloArena
-   Scrapyard

#### (optional) hack

These are modifiers that affect the circumstances of a fight. Each use of a modifier requires one hacking point in order to be used in a fight.

-   data_corruption
    -   Provides a chance to kill the enemy during the beginning of the player's turn.
-   algorithmic_steps
    -   Provides a chance on making the enemy miss on its next attack.
-   hack_n_slash
    -   Provides a flat damage multiplier for each player attack.

:::tip
Investment of analysis points increases the effectiveness of each modifier.
:::

### **player**

:::note
This area will likely be converted into a location in the future.
:::
When a player has reached a certain point in the story, the option to fight other players unlocks. `/fight player` engages the user with a one-off encounter with a player. This has an hour cooldown. Whoever wins, gains a succession point. PvP takes place in the channel `#arena`.
