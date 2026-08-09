"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function DecorativeShapes() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sceneRef.current;
    if (!currentRef) return;

    const { Engine, Render, Runner, Bodies, Composite, Body, Mouse, MouseConstraint } = Matter;

    const width = currentRef.clientWidth || 600;
    const height = currentRef.clientHeight || 500;

    const engine = Engine.create();
    engine.gravity.x = 0;
    engine.gravity.y = 0;

    const render = Render.create({
      element: currentRef,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "transparent",
      },
    });

    Render.run(render);
    render.canvas.style.touchAction = "pan-y";

    const runner = Runner.create();
    Runner.run(runner, engine);

    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions);

    const bodyOptions = {
      restitution: 0.95,
      friction: 0,
      frictionAir: 0,
    };

    const bubble1 = Bodies.circle(width * 0.3, height * 0.3, 16, {
      ...bodyOptions,
      render: { fillStyle: "#f0997b" },
    });

    const bubble2 = Bodies.circle(width * 0.5, height * 0.5, 48, {
      ...bodyOptions,
      render: { fillStyle: "#378add" },
    });

    const bubble3 = Bodies.circle(width * 0.7, height * 0.4, 28, {
      ...bodyOptions,
      render: { fillStyle: "#185fa5" },
    });

    const bubble4 = Bodies.circle(width * 0.85, height * 0.7, 60, {
      ...bodyOptions,
      render: { fillStyle: "#85b7eb" },
    });

    Composite.add(engine.world, [
      ground,
      ceiling,
      leftWall,
      rightWall,
      bubble1,
      bubble2,
      bubble3,
      bubble4,
    ]);

    const giveRandomVelocity = (body: Matter.Body) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2;
      Body.setVelocity(body, {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
      });
    };

    giveRandomVelocity(bubble1);
    giveRandomVelocity(bubble2);
    giveRandomVelocity(bubble3);
    giveRandomVelocity(bubble4);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    render.canvas.addEventListener("wheel", (e) => {
      e.stopPropagation();
    }, { passive: true });

    // --- LIMPIEZA ROBUSTA AL DESMONTAR O CAMBIAR DE RUTA ---
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      
      // Eliminar cualquier rastro del canvas en el DOM de forma segura
      if (currentRef) {
        currentRef.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="absolute inset-0 h-full w-full overflow-hidden pointer-events-auto z-0"
    />
  );
}