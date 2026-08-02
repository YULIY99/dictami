/**
 * The one mark: a white wave on a blue tile, the same artwork as the favicon.
 *
 * Dictami had three marks. The app's own icon is a pale wave on near-white; the
 * favicon is that wave in white on blue; the header drew a third thing in CSS,
 * four bars on a blue tile. Three logos for one product is why the brand read
 * as improvised.
 *
 * The pale one was tried here first, on the argument that the site should show
 * what lands in the Dock. At 32px on a light page it washed out to a grey smudge
 * — it is drawn for 512px, where the soft gradient is the whole point. So the
 * site keeps the blue version, which is the same wave and survives being small,
 * and the app icon is what should be brought into line with it.
 *
 * `public/mark.png` is `app/icon.png` at 256px; `app/icon.png` stays the source.
 */
export function AppIcon({ className = "" }: { className?: string }) {
  return (
    <img
      src="/mark.png"
      alt=""
      width={32}
      height={32}
      className={`h-8 w-8 shrink-0 rounded-[10px] ${className}`}
      aria-hidden
    />
  );
}
