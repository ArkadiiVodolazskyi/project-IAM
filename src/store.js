import { writable } from "svelte/store";

// export let task = writable({
//   problem: "",
//   alternatives: [],
//   criteria: [],
// });

// Hardcoded for developing Solution component
export let task = writable({
  problem: "Выбор машины",
  alternatives: ["BMW", "Mercedes", "Audi"],
  criteria: ["Дизайн", "Цена", "Мощность"],
});
