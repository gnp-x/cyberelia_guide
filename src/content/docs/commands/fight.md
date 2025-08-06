---
title: /fight
---

`/fight` is a command available to those with the [/user/](/reference/roles/#user) role.

## subcommands

### **enemy**

`/fight enemy [difficulty] (modifier)` engages the user with a one-off encounter with an enemy. This has a two minute cooldown across the board, but will be adjusted depending on difficulty at a later date. This takes place in the channel `#enemy-arena`.

#### [required] difficulty

-   easy
-   normal
-   hard

#### (optional) modifiers

-   data_corruption
    -   Provides a 6.25% chance on the beginning of the player's turn to instantly kill the enemy.
-   algorithmic_steps
    -   Provides a 10% chance on disabling the enemy on its turn.

:::note
Modifiers require one hacking point in order to be used in a fight. They are also currently being tuned and are subject to change.
:::

### **player**

When a player has reached a certain point in the story, the option to fight other players unlocks. `/fight player` engages the user with a one-off encounter with a player. This has an hour cooldown. Whoever wins, gains a succession point. PvP takes place in the channel `#pvp-arena`.
