import { useSyncExternalStore } from 'react';
import { useT } from './context';

const noopSubscribe = () => () => {};

// Month index since year 0, a primitive so the snapshot stays stable between renders
const monthKey = (date: Date) => date.getFullYear() * 12 + date.getMonth();

// "Prices current as of <this month>". The server (pre-render) and hydration use the build month,
// then the client re-renders with the visitor's current month.
export function usePricesAsOf(): string {
  const { t } = useT();
  const key = useSyncExternalStore(
    noopSubscribe,
    () => monthKey(new Date()),
    () => monthKey(new Date(__BUILD_TIME__)),
  );
  return t.pricesAsOf(t.months[key % 12], Math.floor(key / 12));
}
