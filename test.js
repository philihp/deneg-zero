import test from "ava";
import deneg from ".";
import isNegativeZero from "is-negative-zero";

test("turns negative zero into zero", t => {
  const n = -0;
  t.true(isNegativeZero(n));
  t.is(deneg(n), 0);
});

test("turns positive zero into zero", t => {
  t.is(deneg(+0), 0);
});

test("turns negative 0.0 into zero", t => {
  const n = -0.0;
  t.true(isNegativeZero(n));
  t.is(deneg(n), 0);
});

test("turns positive 0.0 into zero", t => {
  t.is(deneg(+0.0), 0);
});

test("leaves a random positive integer the same", t => {
  t.is(deneg(42), 42);
});

test("leaves a random negative integer the same", t => {
  t.is(deneg(-42), -42);
});
