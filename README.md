# TaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
To test on other devices on the local network, run `ng serve --host 0.0.0.0`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Design and development process

For this project, (having no previous experience with Angular) I decided that the first thing I would do is set up the project itself, and see how the Angular Material default design looks like. I successfully generated my first components, and I decided to use SCSS, since it feels more routine for me opposed to basic CSS.

One of the first things I did, was test the Angular Material table. I set it up with some hardcoded data, to get familiar with it. Next, I created an array of objetcs for the default task list, which will provide the tasks for the application to sort into two tables: To Do, and Resolved.

The following step was sorting the table for dueDate. I thought at first that this was simple, but I quickly realised that if I add tasks with random intervals in between them, the default sorting will not work. Therefore, I took a new, empty array, and every time a new item is added to the TaskList, it copies all of the already added ones (and the newly added one) to this new array, and sorts them before setting it as `this.dataSource.` I also checked, whether the item object's `resolvedAt` value is empty or not, and if it is not, I copied them to an array which is to be added to the resolved table.

Having finished the inserting, I needed to create a detail view. I decided to make the rows clickable, and expand the clicked row to reveal the details of the task. For this, I used the animations feature of Angular, setting initially every detail row to `height: 0;`. I followed a [great resource](https://www.freakyjolly.com/expand-collapse-single-or-multiple-rows-in-angular-98-material-table-multiple-single/) for implementing this, and I followed the steps written there.

Next, I tried implementing the random inserting of tasks, for which I first used the `setInterval()` function.
I quickly realised that this will not allow me to set a random interval between each insert, so I used an npm package called `set-random-interval`, which works similarly, only it needs the `minDelay` and `maxDelay` arguments set.
I needed the taskList to be randomised too, for this reason, I used another npm package called `array-shuffle`.

After everything was working properly, it was time for styling the tables. This was also a bit more difficult then I expected, but after some setbacks, I managed to create a (in my opinion) usable and proper-looking table.

Despite the setbacks, I really enjoyed working on this task, and learned that Angular is relatively easy to get into, though I still have a lot to learn (which I hope to be able to do at Craftworks :smile:).

If there are any questions, feel free to reach out to me.
