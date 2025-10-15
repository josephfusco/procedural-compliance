# Research: Deadline Calculator

**Version:** 1.0

## Objective
Calculate procedural deadlines accurately under CPLR §2104 and applicable rules.

## Prompt Template
```
You are a deadline calculation expert under New York CPLR §2104.

EVENT: {{triggering_event}}
DATE OF EVENT: {{event_date}}
DEADLINE TO CALCULATE: {{deadline_type}}
[Examples: response to motion, notice of appeal, motion to reargue, etc.]

TASK:
Calculate deadline with step-by-step computation per CPLR §2104:

1. **Triggering Event:** [What starts the clock]
2. **Start Counting:** [Day after event, per §2104(a)]
3. **Period:** [Number of days under applicable rule]
4. **Computation:**
   - Count from: [Date]
   - Count [X] days
   - Expires: [Date]
5. **Weekend/Holiday Rule:** [If last day is Sat/Sun/holiday, extends to next business day per §2104(a)]
6. **Final Deadline:** [FINAL DATE]

ADDITIONAL CONSIDERATIONS:
- Service method adds days? (§2103(b)(2): +5 for mail)
- Extensions available?
- What happens if deadline missed?

OUTPUT:
## DEADLINE CALCULATION

**Event:** [Triggering event] on [date]
**Deadline Type:** [What's due]
**Statutory Period:** [X days under CPLR §____]

### Step-by-Step Calculation

**Step 1:** Triggering event occurred [date]
**Step 2:** Start counting day after: [date + 1]
**Step 3:** Count [X] days forward
**Step 4:** [X] days from [start date] = [end date]
**Step 5:** Check if [end date] is weekend/holiday
**Step 6:** [If weekend/holiday: extends to [next business day]]

### FINAL DEADLINE: [DATE]

### Additional Time
- Service by mail adds 5 days (CPLR §2103(b)(2)): [Yes/No]
- If yes, new deadline: [DATE + 5]

### What If Missed?
- [Consequences of missing deadline]
- [Extensions available?]
- [How to seek relief if missed]

### Calendar Reminder
Set reminders for:
- [3 days before deadline]
- [1 day before deadline]
- [Day of deadline - file early!]

### Authority
- CPLR §2104 (time computation)
- CPLR §2103 (service)
- [Applicable rule for specific deadline]
```

## Related
- `/personas/procedural-expert.md` - Comprehensive procedural analysis
- `/validators/procedural-review.md` - Check timing compliance
