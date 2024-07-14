"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Suas Ideias, Documentos e Planos Unificados. Bem-vindo ao{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion é o espaço interconectado onde <br /> um trabalho mais rápido e
        prático acontece.
      </h3>
      <Button>
        Entrar
        <ArrowRight />
      </Button>
    </div>
  );
};
