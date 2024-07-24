import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Anurag Pandey",
    text: "Lorem ipzjsnhbcdk djwhdbHAb QJDjahshBHABFEB AJFHEFIHWB",
    replies: [
      {
        name: "Kiran Mishra",
        text: "Reply to Anurag's comment.",
        replies: [
          {
            name: "Neha Mishra",
            text: "Reply to Kiran's reply.",
            replies: [
              {
                name: "Rohit Tiwary",
                text: "Reply to Neha's reply.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Bhavesh Kumar",
    text: "Vestibulum at eros eget velit ullamcorper varius non et sem.",
    replies: [
      {
        name: "Nidhi Mehta",
        text: "Reply to Bhavesh's comment.",
        replies: [
          {
            name: "Amit Raj",
            text: "Reply to Nidhi's reply.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Chitra Singh",
    text: "Praesent nec nisl a purus blandit viverra.",
    replies: [
      {
        name: "Vikram Rathore",
        text: "Reply to Chitra's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Divya Patel",
    text: "Fusce tincidunt, nisl eget mattis venenatis, nulla erat vestibulum urna.",
    replies: [
      {
        name: "Karan Kapoor",
        text: "Reply to Divya's comment.",
        replies: [
          {
            name: "Simran Kaur",
            text: "Reply to Karan's reply.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Eshaan Verma",
    text: "Suspendisse potenti. Nullam vehicula purus at tincidunt gravida.",
    replies: [
      {
        name: "Maya Joshi",
        text: "Reply to Eshaan's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Farhan Ali",
    text: "Nam commodo suscipit quam. Cras non dolor.",
    replies: [
      {
        name: "Rhea Sen",
        text: "Reply to Farhan's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Geeta Reddy",
    text: "Etiam imperdiet imperdiet orci. Nunc nec neque.",
    replies: [
      {
        name: "Naveen Desai",
        text: "Reply to Geeta's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Harsh Vardhan",
    text: "Aenean massa. Fusce ac felis sit amet ligula pharetra condimentum.",
    replies: [
      {
        name: "Sonal Mehta",
        text: "Reply to Harsh's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Isha Sharma",
    text: "Nulla consequat massa quis enim.",
    replies: [
      {
        name: "Anuj Saxena",
        text: "Reply to Isha's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Jitendra Prasad",
    text: "Curabitur ullamcorper ultricies nisi.",
    replies: [
      {
        name: "Vijay Patel",
        text: "Reply to Jitendra's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Kiran Desai",
    text: "Ut a nisl id ante tempus hendrerit.",
    replies: [
      {
        name: "Priya Bhatt",
        text: "Reply to Kiran's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Lalit Gupta",
    text: "Vestibulum fringilla pede sit amet augue.",
    replies: [
      {
        name: "Neha Verma",
        text: "Reply to Lalit's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Meena Kaur",
    text: "Fusce a quam. Etiam ultricies nisi vel augue.",
    replies: [
      {
        name: "Sanjay Ghosh",
        text: "Reply to Meena's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Nikhil Reddy",
    text: "Quisque rutrum. Nulla sit amet est.",
    replies: [
      {
        name: "Kavita Yadav",
        text: "Reply to Nikhil's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Omkar Joshi",
    text: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales.",
    replies: [
      {
        name: "Arjun Pillai",
        text: "Reply to Omkar's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Poonam Thakur",
    text: "Vivamus elementum semper nisi.",
    replies: [
      {
        name: "Rakesh Jain",
        text: "Reply to Poonam's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Rahul Jain",
    text: "Suspendisse feugiat. Sed hendrerit.",
    replies: [
      {
        name: "Shalini Das",
        text: "Reply to Rahul's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Sneha Kapoor",
    text: "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis.",
    replies: [
      {
        name: "Vivek Mishra",
        text: "Reply to Sneha's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Tarun Chhabra",
    text: "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id.",
    replies: [
      {
        name: "Gaurav Singh",
        text: "Reply to Tarun's comment.",
        replies: [],
      },
    ],
  },
  {
    name: "Usha Nair",
    text: "Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.",
    replies: [
      {
        name: "Pritam Roy",
        text: "Reply to Usha's comment.",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="py-3">
      <h1 className="text-xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
