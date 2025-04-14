import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";
import { Download } from "lucide-react";

const subjects = [
  {
    name: "Science",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/jesc101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/jesc102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/jesc103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/jesc104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/jesc105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/jesc106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/jesc107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/jesc108.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/jesc109.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/jesc110.pdf" },
      { name: "Chapter 11", link: "https://ncert.nic.in/textbook/pdf/jesc111.pdf" },
      { name: "Chapter 12", link: "https://ncert.nic.in/textbook/pdf/jesc112.pdf" },
      { name: "Chapter 13", link: "https://ncert.nic.in/textbook/pdf/jesc113.pdf" },
    ],
  },
  {
    name: "Mathematics",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/jemh101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/jemh102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/jemh103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/jemh104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/jemh105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/jemh106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/jemh107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/jemh108.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/jemh109.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/jemh110.pdf" },
      { name: "Chapter 11", link: "https://ncert.nic.in/textbook/pdf/jemh111.pdf" },
      { name: "Chapter 12", link: "https://ncert.nic.in/textbook/pdf/jemh112.pdf" },
      { name: "Chapter 13", link: "https://ncert.nic.in/textbook/pdf/jemh113.pdf" },
      { name: "Chapter 14", link: "https://ncert.nic.in/textbook/pdf/jemh114.pdf" },
    ],
  },
  {
    name: "Hindi - Kritika",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/jhkr101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/jhkr102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/jhkr103.pdf" },
    ],
  },
  {
    name: "Hindi - Sanchayan",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/jhsy101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/jhsy102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/jhsy103.pdf" },
    ],
  },
  {
    name: "Hindi - Sparsh",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/jhsp101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/jhsp102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/jhsp103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/jhsp104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/jhsp105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/jhsp106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/jhsp107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/jhsp108.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/jhsp109.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/jhsp110.pdf" },
      { name: "Chapter 11", link: "https://ncert.nic.in/textbook/pdf/jhsp111.pdf" },
      { name: "Chapter 12", link: "https://ncert.nic.in/textbook/pdf/jhsp112.pdf" },
      { name: "Chapter 13", link: "https://ncert.nic.in/textbook/pdf/jhsp113.pdf" },
      { name: "Chapter 14", link: "https://ncert.nic.in/textbook/pdf/jhsp114.pdf" },
    ],
  },
  {
    name: "Geography",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/jess101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/jess102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/jess103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/jess104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/jess105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/jess106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/jess107.pdf" },
    ],
  },
  {
    name: "Economy",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/jess201.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/jess202.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/jess203.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/jess204.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/jess205.pdf" },
    ],
  },
  {
    name: "India and The Contemporary World-II",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/jess301.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/jess302.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/jess303.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/jess304.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/jess305.pdf" },
    ],
  },
  {
    name: "Democratic Politics-II",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/jess401.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/jess402.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/jess403.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/jess404.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/jess405.pdf" },
    ],
  },
  {
    name: "English - First Flight",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/jeff101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/jeff102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/jeff103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/jeff104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/jeff105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/jeff106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/jeff107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/jeff108.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/jeff109.pdf" },
    ],
  },
  {
    name: "English - Footprints Without Feet",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/jefp101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/jefp102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/jefp103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/jefp104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/jefp105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/jefp106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/jefp107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/jefp108.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/jefp109.pdf" },
    ],
  },
  {
    name: "Physical Education",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/jehp101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/jehp102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/jehp103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/jehp104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/jehp105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/jehp106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/jehp107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/jehp108.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/jehp109.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/jehp110.pdf" },
      { name: "Chapter 11", link: "https://ncert.nic.in/textbook/pdf/jehp111.pdf" },
      { name: "Chapter 12", link: "https://ncert.nic.in/textbook/pdf/jehp112.pdf" },
      { name: "Chapter 13", link: "https://ncert.nic.in/textbook/pdf/jehp113.pdf" },
    ],
  },
];

const class11Subjects = [
  {
    name: "Mathematics",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/kemh101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/kemh102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/kemh103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/kemh104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/kemh105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/kemh106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/kemh107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/kemh108.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/kemh109.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/kemh110.pdf" },
      { name: "Chapter 11", link: "https://ncert.nic.in/textbook/pdf/kemh111.pdf" },
      { name: "Chapter 12", link: "https://ncert.nic.in/textbook/pdf/kemh112.pdf" },
      { name: "Chapter 13", link: "https://ncert.nic.in/textbook/pdf/kemh113.pdf" },
      { name: "Chapter 14", link: "https://ncert.nic.in/textbook/pdf/kemh114.pdf" },
    ],
  },
  {
    name: "Chemistry-1",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/kech101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/kech102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/kech103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/kech104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/kech105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/kech106.pdf" },
    ],
  },
  {
    name: "Chemistry-2",
    chapters: [
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/kech201.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/kech202.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/kech203.pdf" },
    ],
  },
  {
    name: "Physics-1",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/keph101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/keph102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/keph103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/keph104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/keph105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/keph106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/keph107.pdf" },
    ],
  },
  {
    name: "Physics-2",
    chapters: [
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/keph201.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/keph202.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/keph203.pdf" },
      { name: "Chapter 11", link: "https://ncert.nic.in/textbook/pdf/keph204.pdf" },
      { name: "Chapter 12", link: "https://ncert.nic.in/textbook/pdf/keph205.pdf" },
      { name: "Chapter 13", link: "https://ncert.nic.in/textbook/pdf/keph206.pdf" },
      { name: "Chapter 14", link: "https://ncert.nic.in/textbook/pdf/keph207.pdf" },
    ],
  },
  {
    name: "Biology",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/kebo101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/kebo102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/kebo103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/kebo104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/kebo105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/kebo106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/kebo107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/kebo108.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/kebo109.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/kebo110.pdf" },
      { name: "Chapter 11", link: "https://ncert.nic.in/textbook/pdf/kebo111.pdf" },
      { name: "Chapter 12", link: "https://ncert.nic.in/textbook/pdf/kebo112.pdf" },
      { name: "Chapter 13", link: "https://ncert.nic.in/textbook/pdf/kebo113.pdf" },
      { name: "Chapter 14", link: "https://ncert.nic.in/textbook/pdf/kebo114.pdf" },
      { name: "Chapter 15", link: "https://ncert.nic.in/textbook/pdf/kebo115.pdf" },
      { name: "Chapter 16", link: "https://ncert.nic.in/textbook/pdf/kebo116.pdf" },
      { name: "Chapter 17", link: "https://ncert.nic.in/textbook/pdf/kebo117.pdf" },
      { name: "Chapter 18", link: "https://ncert.nic.in/textbook/pdf/kebo118.pdf" },
      { name: "Chapter 19", link: "https://ncert.nic.in/textbook/pdf/kebo119.pdf" },
    ],
  },
  {
    name: "Accountancy-1",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/keac101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/keac102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/keac103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/keac104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/keac105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/keac106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/keac107.pdf" },
    ],
  },
  {
    name: "Accountancy-2",
    chapters: [
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/keac201.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/keac202.pdf" },
    ],
  },
  {
    name: "Economics-Statics",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/kest101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/kest102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/kest103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/kest104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/kest105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/kest106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/kest107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/kest108.pdf" },
    ],
  },
  {
    name: "History",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/kehs101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/kehs102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/kehs103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/kehs104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/kehs105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/kehs106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/kehs107.pdf" },
    ],
  },
  {
    name: "Geography-Indian Physical Environment",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/kegy101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/kegy102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/kegy103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/kegy104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/kegy105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/kegy106.pdf" },
    ],
  },
  {
    name: "English-Hornbill",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/kehb101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/kehb102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/kehb103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/kehb104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/kehb105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/kehb106.pdf" },
    ],
  },
  {
    name: "English-Hornbill (Creative Writing Skills)",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/kehb111.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/kehb112.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/kehb113.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/kehb114.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/kehb115.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/kehb116.pdf" },
    ],
  },
  {
    name: "English-Snapshot",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/kesp101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/kesp102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/kesp103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/kesp104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/kesp105.pdf" },
    ],
  },
  {
    name: "Physical Education",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/kehp101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/kehp102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/kehp103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/kehp104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/kehp105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/kehp106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/kehp107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/kehp108.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/kehp109.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/kehp110.pdf" },
      { name: "Chapter 11", link: "https://ncert.nic.in/textbook/pdf/kehp111.pdf" },
    ],
  },
];

const class12Subjects = [
  // Existing Class 12 subjects
  {
    name: "Accountancy Part 1",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/leac101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/leac102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/leac103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/leac104.pdf" },
    ],
  },
  {
    name: "Accountancy Part 2",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/leac201.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/leac202.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/leac203.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/leac204.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/leac205.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/leac206.pdf" },
    ],
  },
  {
    name: "Microeconomics",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/leec201.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/leec202.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/leec203.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/leec204.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/leec205.pdf" },
    ],
  },
  {
    name: "History Part 1",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/lehs101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/lehs102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/lehs103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/lehs104.pdf" },
    ],
  },
  {
    name: "History Part 2",
    chapters: [
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/lehs201.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/lehs202.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/lehs203.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/lehs204.pdf" },
    ],
  },
  {
    name: "Geography - Fundamentals of Human",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/legy101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/legy102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/legy103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/legy104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/legy105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/legy106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/legy107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/legy108.pdf" },
    ],
  },
  {
    name: "English - Flamingo",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/lefl101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/lefl02.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/lefl103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/lefl04.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/lefl105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/lefl106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/lefl107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/lefl108.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/lefl111.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/lefl112.pdf" },
      { name: "Chapter 11", link: "https://ncert.nic.in/textbook/pdf/lefl113.pdf" },
      { name: "Chapter 12", link: "https://ncert.nic.in/textbook/pdf/lefl114.pdf" },
      { name: "Chapter 13", link: "https://ncert.nic.in/textbook/pdf/lefl115.pdf" },
    ],
  },
  // Newly added subjects for Class 12
  {
    name: "Mathematics-1",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/lemh101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/lemh102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/lemh103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/lemh104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/lemh105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/lemh106.pdf" },
    ],
  },
  {
    name: "Mathematics-2",
    chapters: [
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/lemh201.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/lemh202.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/lemh203.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/lemh204.pdf" },
      { name: "Chapter 11", link: "https://ncert.nic.in/textbook/pdf/lemh205.pdf" },
      { name: "Chapter 12", link: "https://ncert.nic.in/textbook/pdf/lemh206.pdf" },
      { name: "Chapter 13", link: "https://ncert.nic.in/textbook/pdf/lemh207.pdf" },
    ],
  },
  {
    name: "Physics-1",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/leph101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/leph102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/leph103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/leph104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/leph105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/leph106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/leph107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/leph108.pdf" },
    ],
  },
  {
    name: "Physics-2",
    chapters: [
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/leph201.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/leph202.pdf" },
      { name: "Chapter 11", link: "https://ncert.nic.in/textbook/pdf/leph203.pdf" },
      { name: "Chapter 12", link: "https://ncert.nic.in/textbook/pdf/leph204.pdf" },
      { name: "Chapter 13", link: "https://ncert.nic.in/textbook/pdf/leph205.pdf" },
      { name: "Chapter 14", link: "https://ncert.nic.in/textbook/pdf/leph206.pdf" },
    ],
  },
  {
    name: "Chemistry-1",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/lech101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/lech102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/lech103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/lech104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/lech105.pdf" },
    ],
  },
  {
    name: "Chemistry-2",
    chapters: [
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/lech201.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/lech202.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/lech203.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/lech204.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/lech205.pdf" },
    ],
  },
  {
    name: "Biology",
    chapters: [
      { name: "Chapter 1", link: "https://ncert.nic.in/textbook/pdf/lebo101.pdf" },
      { name: "Chapter 2", link: "https://ncert.nic.in/textbook/pdf/lebo102.pdf" },
      { name: "Chapter 3", link: "https://ncert.nic.in/textbook/pdf/lebo103.pdf" },
      { name: "Chapter 4", link: "https://ncert.nic.in/textbook/pdf/lebo104.pdf" },
      { name: "Chapter 5", link: "https://ncert.nic.in/textbook/pdf/lebo105.pdf" },
      { name: "Chapter 6", link: "https://ncert.nic.in/textbook/pdf/lebo106.pdf" },
      { name: "Chapter 7", link: "https://ncert.nic.in/textbook/pdf/lebo107.pdf" },
      { name: "Chapter 8", link: "https://ncert.nic.in/textbook/pdf/lebo108.pdf" },
      { name: "Chapter 9", link: "https://ncert.nic.in/textbook/pdf/lebo109.pdf" },
      { name: "Chapter 10", link: "https://ncert.nic.in/textbook/pdf/lebo110.pdf" },
      { name: "Chapter 11", link: "https://ncert.nic.in/textbook/pdf/lebo111.pdf" },
      { name: "Chapter 12", link: "https://ncert.nic.in/textbook/pdf/lebo112.pdf" },
      { name: "Chapter 13", link: "https://ncert.nic.in/textbook/pdf/lebo113.pdf" },
    ],
  },
];

const Library = () => {
  return (
    <div>
      <h1 className="gradient-title text-center text-6xl font-extrabold pb-8">Smart Shelf</h1>

      {/* Class 10 Section */}
      <h2 className="text-4xl font-bold text-gray-600 mb-6">Class 10</h2>
      {subjects.map((subject, index) => (
        <Card key={index} className="mb-6">
          <CardHeader>
            <h3 className="text-3xl font-bold text-gray-600">{subject.name}</h3>
            <div className="grid grid-cols-2 gap-4">
              {subject.chapters.map((chapter, idx) => (
                <CardTitle key={idx} className="flex justify-between items-center font-semibold p-4 border rounded-lg shadow-md">
                  {chapter.name}
                  <a href={chapter.link} download>
                    <Download size={18} className="bg-white text-black rounded-full h-8 w-8 p-1.5 cursor-pointer" />
                  </a>
                </CardTitle>
              ))}
            </div>
          </CardHeader>
        </Card>
      ))}

      {/* Class 11 Section */}
      <h2 className="text-4xl font-bold text-gray-600 mb-6 mt-12">Class 11</h2>
      {class11Subjects.map((subject, index) => (
        <Card key={index} className="mb-6">
          <CardHeader>
            <h3 className="text-3xl font-bold text-gray-600">{subject.name}</h3>
            <div className="grid grid-cols-2 gap-4">
              {subject.chapters.map((chapter, idx) => (
                <CardTitle key={idx} className="flex justify-between items-center font-semibold p-4 border rounded-lg shadow-md">
                  {chapter.name}
                  <a href={chapter.link} download>
                    <Download size={18} className="bg-white text-black rounded-full h-8 w-8 p-1.5 cursor-pointer" />
                  </a>
                </CardTitle>
              ))}
            </div>
          </CardHeader>
        </Card>
      ))}

      {/* Class 12 Section */}
      <h2 className="text-4xl font-bold text-gray-600 mb-6 mt-12">Class 12</h2>
      {class12Subjects.map((subject, index) => (
        <Card key={index} className="mb-6">
          <CardHeader>
            <h3 className="text-3xl font-bold text-gray-600">{subject.name}</h3>
            <div className="grid grid-cols-2 gap-4">
              {subject.chapters.map((chapter, idx) => (
                <CardTitle key={idx} className="flex justify-between items-center font-semibold p-4 border rounded-lg shadow-md">
                  {chapter.name}
                  <a href={chapter.link} download>
                    <Download size={18} className="bg-white text-black rounded-full h-8 w-8 p-1.5 cursor-pointer" />
                  </a>
                </CardTitle>
              ))}
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default Library;