import React from "react";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Ignite Your Learning Journey?
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
        Join thousands of learners who are transforming their careers and making
        an impact in the tech world.
      </p>
      <Button
        size="lg"
        className="mr-4"
      >
        Explore Courses
      </Button>
      <Button
        size="lg"
        variant="outline"
      >
        Join Free Workshop
      </Button>
    </section>
  );
};

export default CallToAction;
