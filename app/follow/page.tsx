import { MouseFollower } from "@/app/follow/MouseFollower";

export default function Page() {
  return (
    <>
      <MouseFollower />
      <div className="max-w-2xl text-center space-y-6 text-lg leading-relaxed text-white-700">
        <p>
          This page uses a simple game loop that separates control from object
          behavior. A React component creates the canvas and initializes a
          director, which manages the scene, events, animation loop, and
          cleanup. Each frame uses elapsed time to update actors, clear the
          canvas, and redraw, ensuring smooth performance across devices.
        </p>

        <p>
          Movement is powered by a custom 2D Vector class that handles position,
          direction, velocity, and steering calculations. Actors use vectors
          instead of raw coordinates to respond to mouse input and update their
          movement. This structure keeps React, the Director, actors, and math
          logic separate, making the system modular and easy to expand.
        </p>
      </div>
    </>
  );
}
