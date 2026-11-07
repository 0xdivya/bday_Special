export default function BackButton({ go }) {
  return <button className="cloud back" onClick={() => go('choose')}>← back</button>;
}
