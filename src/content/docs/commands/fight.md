---
title: /fight
---

`/fight` is a command available to those with the [/user/](/reference/roles/#user) role.

## subcommands

### **enemy**

`/fight enemy (difficulty)` engages the user with a one-off encounter with an enemy. This has a two minute cooldown across the board, but will be adjusted depending on difficulty at a later date. This takes place in the channel `#enemy-arena`.

#### difficulty parameter

-   easy :: fight harder enemies later.
-   normal
-   hard :: fight harder enemies sooner.

### **player**

`/fight player` engages the user with a one-off encounter with a player. This has a 6-hour cooldown. Whoever wins, gains half of the loser's total xp. This takes place in the channel `#pvp-arena`.

## to_be_implemented

-   XP loss
-   Proper enemy scaling
