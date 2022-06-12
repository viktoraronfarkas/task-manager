import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import arrayShuffle from 'array-shuffle';
import setRandomInterval from 'set-random-interval';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  dueDate: Date;
  resolvedAt: string;
}

const defaultTaskList: Task[] = [
  {
    id: 1,
    title: 'Get groceries',
    description: 'Milk, Eggs, Bread, Salt',
    priority: 'low',
    dueDate: new Date(2022, 5, 9),
    resolvedAt: new Date(2022, 5, 9).toDateString(),
  },
  {
    id: 2,
    title: 'Send important emails',
    description: 'Send email to tax office, include reference number: 372983.',
    priority: 'high',
    dueDate: new Date(2022, 5, 2),
    resolvedAt: '',
  },
  {
    id: 3,
    title: 'Take Randy the dog to the vet',
    description: 'Price of visit: 30 Euros. Withdraw cash.',
    priority: 'medium',
    dueDate: new Date(2022, 5, 13),
    resolvedAt: new Date(2022, 5, 9).toDateString(),
  },
  {
    id: 4,
    title: 'Water Jane\'s plants',
    description: 'Let the soil get fully soaked with water.',
    priority: 'high',
    dueDate: new Date(2022, 7, 11),
    resolvedAt: '',
  },
  {
    id: 5,
    title: 'Do the craftworks coding challenge',
    description: 'Details in email.',
    priority: 'high',
    dueDate: new Date(2021, 2, 5),
    resolvedAt: new Date(2022, 6, 6).toDateString(),
  },
  {
    id: 6,
    title: 'Do laundry',
    description: '50 cents for one load',
    priority: 'low',
    dueDate: new Date(2020, 11, 14),
    resolvedAt: '',
  },
  {
    id: 7,
    title: 'Get prescription from doctor',
    description: 'Call +36301234567',
    priority: 'high',
    dueDate: new Date(2022, 9, 29),
    resolvedAt: '',
  },
];

let shuffledList: Task[] = arrayShuffle(defaultTaskList);
let tasks: Task[] = [];
let resolvedTasks: Task[] = [];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TasksComponent implements OnInit {
  isTableExpanded = false;
  displayedColumns: string[] = ['title', 'priority', 'dueDate'];
  dataSource = tasks;
  resolvedDataSource =  resolvedTasks;
  i = 0;

  addItem(): void {
    let currentTask: Task = shuffledList[this.i];
    let newData = [ ...this.dataSource ];
    let newResolvedData = [... this.resolvedDataSource];

    if (currentTask.resolvedAt) {
      newResolvedData.push(currentTask)
    } else {
      newData.push(currentTask);
    }

    newData = newData.sort((a, b) => {
      return a.dueDate.getTime() - b.dueDate.getTime();
    });
    newResolvedData = newResolvedData.sort((a, b) => {
      return a.dueDate.getTime() - b.dueDate.getTime();
    });

    newData.map((obj) => {
      return { ...obj, dueDate: obj.dueDate.toDateString() };
    });
    newResolvedData.map((obj) => {
      return { ...obj, dueDate: obj.dueDate.toDateString() };
    });

    this.dataSource = newData;
    this.resolvedDataSource = newResolvedData;

    this.i++;
  }

  constructor() { }

  ngOnInit(): void {
    let interval = setRandomInterval(() => {
      if (defaultTaskList.length > this.i) {
        this.addItem();
      } else {
        interval.clear();
      }
    }, 1000, 10000);
  }

  // Toggle Rows
  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataSource.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    });

    this.resolvedDataSource.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    });
  }
}

