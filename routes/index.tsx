export default function Home() {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <video
        loop
        autoPlay
        muted
        class="h-screen w-screen object-cover fixed top-0 left-0 -z-1"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <img src="/logo-white.png" class="absolute z-10 p-4" />
    </div>
  );
}
