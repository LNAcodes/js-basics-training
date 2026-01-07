# Week 1: Conditionals - Learning Notes

## Day 1: If/Else Fundamentals

**Date:** January 6, 2026
**Duration:** 60 minutes

### 🎯 What I Practiced

1. **Basic if/else structure**

   - Age verification (adult/minor)
   - Temperature classification (hot/warm/cold)

2. **Self-written exercise**
   - Cinema ticket pricing system
   - Tested edge cases (age = 8, 12, 25)

### 💡 Key Learnings

#### 1. Edge Cases Matter

```javascript
temperature > 25; // 25 is NOT included
temperature >= 25; // 25 IS included
```

**Lesson:** Always test boundary values (15, 25 in temperature example)

#### 2. Else Doesn't Need a Condition

```javascript
if (condition1) {
  // ...
} else if (condition2) {
  // ...
} else {
  // "everything else" - no condition needed
  // ...
}
```

#### 3. Order Matters - Conditions Checked Top to Bottom

```javascript
if (age <= 8) {
  // checked first
  // ...
} else if (age < 18) {
  // only checked if first was false
  // ...               // age is automatically > 8 here!
} else {
  // only if both above were false
  // ...
}
```

**Key insight:** In `else if (age < 18)`, I don't need `age > 8 && age < 18` because the first condition already filtered out ages ≤ 8.

#### 4. Only ONE Block Executes

Once a condition is true, the rest are skipped. The `if/else if/else` chain stops after the first match.

### 🐛 Bug I Found & Fixed

**Problem:**

```javascript
} else age >= 18;  // semicolon here!
{
  console.log("Price 15€");  // this runs ALWAYS!
}
```

**Why it broke:**

- The `;` ended the else statement
- The curly braces became a standalone code block
- Result: Two console.logs executed

**Fix:** Remove the semicolon, make it part of the else statement

### 🔍 New Concepts Learned

**`&&` (AND operator):**

```javascript
if (age > 8 && age < 18) {
  // BOTH conditions must be true
}
```

While not necessary in my if/else chain (due to order), `&&` is useful for:

- Independent if statements (not part of else chain)
- Complex conditions that need multiple requirements

### ✅ Tests Completed

| Age | Expected | Result | ✓   |
| --- | -------- | ------ | --- |
| 8   | 8€       | 8€     | ✅  |
| 12  | 12€      | 12€    | ✅  |
| 25  | 15€      | 15€    | ✅  |

### 📈 Next Steps

- [ ] Day 2: More if/else variations
- [ ] Practice with different data types (strings, booleans)
- [ ] Explore `||` (OR operator)

---

**Reflection:** Writing code completely from scratch (cinema tickets) was challenging but valuable. The semicolon bug taught me to pay attention to syntax details. Testing edge cases revealed why `>=` vs `>` matters.
