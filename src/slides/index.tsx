import { S01Title } from './s01';
import { S02Overview } from './s02';
import { S03Structure } from './s03';
import { S04ClassDiagram } from './s04';
import { S05Abstraction } from './s05';
import { S06Encapsulation } from './s06';
import { S07Inheritance } from './s07';
import { S08Polymorphism } from './s08';
import { S09Patterns } from './s09';
import { S10Features } from './s10';
import { S11Demo } from './s11';
import { S12Summary } from './s12';

export type SlideAccent = 'emerald' | 'sky' | 'violet' | 'amber' | 'rose' | 'teal';

export interface DeckSlide {
  id: string;
  title: string;
  accent: SlideAccent;
  Component: () => JSX.Element;
}

export const slides: DeckSlide[] = [
  { id: 'title', title: 'ESS Fitness Center', accent: 'emerald', Component: S01Title },
  { id: 'overview', title: 'ภาพรวมระบบ', accent: 'emerald', Component: S02Overview },
  { id: 'structure', title: 'โครงสร้างโปรเจกต์', accent: 'violet', Component: S03Structure },
  { id: 'class-diagram', title: 'Class Diagram', accent: 'emerald', Component: S04ClassDiagram },
  { id: 'abstraction', title: 'Abstraction', accent: 'amber', Component: S05Abstraction },
  { id: 'encapsulation', title: 'Encapsulation', accent: 'sky', Component: S06Encapsulation },
  { id: 'inheritance', title: 'Inheritance', accent: 'violet', Component: S07Inheritance },
  { id: 'polymorphism', title: 'Polymorphism', accent: 'rose', Component: S08Polymorphism },
  { id: 'patterns', title: 'Design Patterns', accent: 'teal', Component: S09Patterns },
  { id: 'features', title: 'ระบบทำงานได้จริง', accent: 'emerald', Component: S10Features },
  { id: 'demo', title: 'ขั้นตอนการสาธิต', accent: 'sky', Component: S11Demo },
  { id: 'summary', title: 'สรุป', accent: 'violet', Component: S12Summary },
];