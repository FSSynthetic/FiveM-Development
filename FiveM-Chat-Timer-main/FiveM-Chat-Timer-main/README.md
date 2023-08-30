*Alright, this is one of those late-night shower thoughts you have and just wonder why, but can't argue why not.*

This is a client-side script that features the ability to set a timer using chat commands that counts down in the background until the time is up. Once the time is up, the player will be notified just above their minimap display.

This script will allow the player to set one timer at a time by using the chat command:

> `/setTimer (amount) (s [seconds], m [minutes], or h [hours]`
> 
> For example: /setTimer 12 m (This will set a timer for 12 minutes)

Let's say Timmy accidentally sets a timer for 12 hours instead of 12 minutes. Since the script will only allow a player to set one active timer at a time, he can't set another timer without the first one concluding. Well little Timmy, you're in luck. By using this chat command:

> `/stopTimer`

we can stop the timer from continuing, thus allowing Timmy to start a new timer.

Let's say Timmy wants to see how much longer his timer has before it's over. Timmy can use this chat command:

>`/checkTime`

to check the total amount of time left until the active timer is concluded.

___

There's really nothing else to it. I'm going to be honest, I don't really see any point to this, but I'm sure someone out there will see that it's put to good use. Anyways, I hope you enjoy!
