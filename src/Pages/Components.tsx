import { useState } from "react";
import Button from "../components/Button";
import ButtonIcon from "../components/ButtonIcon";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
import TimeSelect from "../components/TimeSelect/timeSelect";

export default function Components() {
  const [selectedHour, setSelectedHour] = useState("10:00");

  const morningHours = ["09:00", "10:00", "11:00", "12:00"];

  return (
    <div className="min-h-screen bg-[var(--gray-900)] text-white p-8 flex flex-col items-center">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-[var(--yellow)]">
          HairDay Components
        </h1>

        {/* Demonstração TextInput */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--gray-200)]">
            Logo:
          </h2>
          <div className="grid grid-cols-2 gap-3 p-4 rounded-lg bg-[var(--gray-800)]">
            <Logo />
          </div>
          <h2 className="text-xl font-semibold text-[var(--gray-200)]">
            Estados do TextInput:
          </h2>

          <div className="space-y-1">
            <span className="text-xs text-[var(--gray-400)] uppercase font-bold tracking-wider">
              1. Empty / Default
            </span>
            <TextInput state="empty-default" placeholder="Nome do cliente" />
          </div>

          <div className="space-y-1">
            <span className="text-xs text-[var(--gray-400)] uppercase font-bold tracking-wider">
              2. Empty / Active
            </span>
            <TextInput state="empty-active" placeholder="Nome do cliente" />
          </div>

          <div className="space-y-1">
            <span className="text-xs text-[var(--gray-400)] uppercase font-bold tracking-wider">
              3. Filled / Default
            </span>
            <TextInput
              state="filled-default"
              defaultValue="Rodrigo Gonçalves"
            />
          </div>

          <div className="space-y-1">
            <span className="text-xs text-[var(--gray-400)] uppercase font-bold tracking-wider">
              4. Filled / Active
            </span>
            <TextInput state="filled-active" defaultValue="Rodrigo Gonçalves" />
          </div>

          <div className="space-y-1">
            <span className="text-xs text-[var(--gray-400)] uppercase font-bold tracking-wider">
              Interativo (foco e digitação automáticos)
            </span>
            <TextInput placeholder="Digite o nome..." />
          </div>
        </div>

        {/* Demonstração TimeSelect */}
        <div className="space-y-4 pt-4 border-t border-[var(--gray-700)]">
          <h2 className="text-xl font-semibold text-[var(--gray-200)]">
            Estados do TimeSelect:
          </h2>

          <div className="grid grid-cols-2 gap-3 p-4 rounded-lg bg-[var(--gray-800)]">
            <div className="space-y-1">
              <span className="text-xs text-[var(--gray-400)] block">
                DEFAULT
              </span>
              <TimeSelect time="09:00" state="default" />
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[var(--gray-400)] block">
                HOVER
              </span>
              <TimeSelect time="10:00" state="hover" />
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[var(--gray-400)] block">
                SELECTED
              </span>
              <TimeSelect time="11:00" state="selected" />
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[var(--gray-400)] block">
                DISABLED
              </span>
              <TimeSelect time="12:00" state="disabled" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-[var(--gray-400)] uppercase font-bold tracking-wider">
              Interativo (Manhã)
            </span>
            <div className="flex flex-wrap gap-2">
              {morningHours.map((hour) => (
                <TimeSelect
                  key={hour}
                  time={hour}
                  selected={selectedHour === hour}
                  disabled={hour === "12:00"}
                  onClick={() => setSelectedHour(hour)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Demonstração ButtonIcon */}
        <div className="space-y-4 pt-4 border-t border-[var(--gray-700)]">
          <h2 className="text-xl font-semibold text-[var(--gray-200)]">
            ButtonIcon (Lixeira):
          </h2>

          <div className="flex items-center gap-6 p-4 rounded-lg bg-[var(--gray-800)]">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-[var(--gray-400)]">
                DEFAULT (Circular)
              </span>
              <ButtonIcon shape="circle" variant="destructive" />
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-[var(--gray-400)]">
                HOVER (Circular)
              </span>
              <ButtonIcon shape="circle" variant="destructive" state="hover" />
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-[var(--gray-400)]">
                DEFAULT (Quadrado)
              </span>
              <ButtonIcon shape="square" variant="destructive" />
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-[var(--gray-400)]">
                HOVER (Quadrado)
              </span>
              <ButtonIcon shape="square" variant="destructive" state="hover" />
            </div>
          </div>
        </div>
        {/* Demonstração Button */}
        <div className="space-y-4 pt-4 border-t border-[var(--gray-700)]">
          <h2 className="text-xl font-semibold text-[var(--gray-200)]">
            Button:
          </h2>
          <div className="flex flex-col items-center gap-6 p-4 rounded-lg bg-[var(--gray-800)]">
            <Button>AGENDAR</Button>
            <Button className="hover:bg-[var(--yellow-light)]">AGENDAR</Button>
            <Button disabled>AGENDAR</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
