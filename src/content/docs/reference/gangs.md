---
title: gangs
---

Gangs are a social element in this game, where players in the same gang can congregate in their own chat channel and talk about whatever gangs talk about. At the moment their functionality is rather superficial, but there are plans to make them more integrated into the game to make things _interesting_.

## subcommands

### **create**

`/gang create [name] [motto]` allows the player to submit a petition to create a gang to one of the developers. Upon approval, the gang will be created and the player will be added as the founder.

### **join**

`/gang join [name]` provides the user a list of gangs to choose from. This is presented in a role list, but only roles prefixed with /gang/ can be used in order to successfully join a gang. On joining of a gang, it is broadcasted to other players. This puts the player on a 24 hour cooldown before leaving and joining another gang if they decide this one isn't for them.

### **leave**

`/gang leave [name]` provides the user a list of gangs to choose from. This is presented in a role list, but only roles prefixed with /gang/ can be used in order to successfully leave a gang. On leaving a gang, it is **_not_** broadcasted to other players. There is a 10 second cooldown after executing this command, but feel free to join another gang afterwards.
