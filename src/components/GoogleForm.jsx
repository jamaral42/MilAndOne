



export default function GoogleForm() {
  return (
    <div className="w-full h-[1100px] shadow-lg rounded-lg overflow-hidden">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf8nQIsP-9Sd00PX-T7ZZ4kBnQqgGxN-UiacyfzPxUBAJuHrw/viewform?embedded=true"
        width="100%"
        height="100%"
        className="border-none"
      >
        Loading…
      </iframe>
    </div>
  );
}
