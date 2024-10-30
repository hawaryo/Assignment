"use client";
import { FormEvent, useState } from "react";
export default function Home() {
  const [fristname, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [submit, setSubmit] = useState(false);
  const [num, setNum] = useState(0);
  const [day, setDay] = useState(0);
  const [names, setNames] = useState("");
  const [search, setSearch] = useState("");
    const [submitnames, setSubmitnames] = useState(false);
    const [sentence, setSentence] = useState("");

  function ageFeedback(agetext: string): string {
    let age = parseInt(agetext);
    if (age >= 1 && age <= 10) {
      return "Child";
    }
    if (age >= 11 && age <= 18) {
      return "Teenager";
    }
    if (age >= 19 && age <= 50) {
      return "Grown up";
    }
    if (age > 50) {
      return "Old";
    }

    return "try again";
  }

  const handleSubmit = (e: FormEvent) => {
    setSubmit(true);
    e.preventDefault();
  };

  ///

  function whatDayIsToday(n: number): string {
    let days = [
      "",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[n];
  }
  ///
function arrayOfNames(nam: string): string[] {
  return nam.split(" ");

}


function handleSubmitnames(e: FormEvent) {
  setSubmitnames(true);
  e.preventDefault();
}







  ///
  return (
    <>
      <h1 style={{ textAlign: "center" }}>All Javascript Tasks</h1>
      <section style={{ textAlign: "center" }}>
        <h2>Task 1</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="frist-name">Enter Your First Name</label>
            <input
              type="text"
              name="frist-name"
              id="frist-name"
              value={fristname}
              onChange={(e) => setFristName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="last-name">Enter Your Last Name</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="age">Enter Your Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        {submit && (
          <>
            <h3 style={{ fontFamily: "sans-serif", textAlign: "center" }}>
              HI {fristname} {lastName}
            </h3>
            <h2>{ageFeedback(age)}</h2>
          </>
        )}
      </section>
      <hr />
      <section style={{ textAlign: "center" }}>
        <h2>Task 2</h2>

        <label htmlFor="number">Enter a number</label>
        <input
          type="number"
          id="number"
          name="number"
          value={num}
          onChange={(e) => setNum(parseInt(e.target.value))}
        />

        <h2>{num % 2 == 0 ? "Even" : "Odd"}</h2>

        <hr />
        <hr />
      </section>
      <section style={{ textAlign: "center" }}>
        <h2>Task 3</h2>

        <label htmlFor="day">Enter a day</label>
        <input
          type="number"
          id="day"
          name="day"
          min="1"
          max="7"
          value={day}
          onChange={(e) => setDay(parseInt(e.target.value))}
        />

        <h2>{whatDayIsToday(day)}</h2>
      </section>
      <hr />

      <section style={{ textAlign: "center" }}>
        <h2>Task 4</h2>
        <form onSubmit={handleSubmitnames}>
          <label htmlFor="names">Enter five names saperated by space</label>
          <input
            type="text"
            id="names"
            name="names"
            value={names}
            onChange={(e) => setNames(e.target.value)}
          />

          <div>
            <label htmlFor="search">Enter one name to search</label>
            <input
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        <h2>
          {submitnames &&
            (arrayOfNames(names).includes(search.trim()) ? "Yes" : "No")}
        </h2>
      </section>
      <hr />

      <section style={{ textAlign: "center" }}>
        <h2>Task 5</h2>

        <label htmlFor="sentence">Enter a sentence</label>
        <input
          type="text"
          id="sentence"
          name="sentence"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />

        <h2>the sentence has {sentence.trim().split(" ").length} words</h2>
      </section>
    </>
  );
}
