import type { ChangeEvent } from "react";
import { useState } from "react";
import AfternoonIcon from "../assets/icons/afternumIcon.svg?react";
import CalendarIcon from "../assets/icons/calendar.svg?react";

import MorningIcon from "../assets/icons/morningIcon.svg?react";
import NightIcon from "../assets/icons/nightIcon.svg?react";
import TrachIcon from "../assets/icons/trash.svg?react";
import Button from "../components/Button";
import ButtonIcon from "../components/ButtonIcon";
import Icon from "../components/Icon";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
import TimeSelect from "../components/TimeSelect/timeSelect";

export default function Home() {
  const [selectedDate] = useState("10/10/2024");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [clientName, setClientName] = useState("Helena Souza");

  const morningTimes = ["09:00", "10:00", "11:00", "12:00"];
  const afternoonTimes = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
  const nightTimes = ["19:00", "20:00", "21:00", "22:00"];

  const appointments = {
    morning: [{ time: "11:00", client: "Ryan Davont" }],
    afternoon: [
      { time: "13:00", client: "Linda Curtis" },
      { time: "14:00", client: "Randy Carson" },
      { time: "15:00", client: "Presley Friend" },
      { time: "17:00", client: "Bryson Korsgaard" },
    ],
    night: [{ time: "21:00", client: "Hollis Hewitt" }],
  };

  function handleClientNameChange(e: ChangeEvent<HTMLInputElement>) {
    setClientName(e.target.value);
  }

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-[var(--gray-800)] text-white">
      <section className="flex w-[90%] max-w-6xl bg-[var(--gray-900)] rounded-lg p-6 gap-6 relative overflow-hidden">
        {/* Sidebar — Agendar atendimento */}
        <div className="flex flex-col w-1/3 bg-[var(--gray-700)] rounded-md px-6 py-8">
          <header className="mt-5 mb-4">
            <div className="absolute -top-4 -left-4 p-4">
              <Logo />
            </div>
            <h2 className="text-white font-semibold">Agende um atendimento</h2>
            <p className="text-[var(--gray-300)] text-sm">
              Selecione a data, horário e nome do cliente para criar um
              agendamento.
            </p>
          </header>

          {/* Data */}
          <div className="mb-4">
            <p className="text-sm font-medium mb-1 block text-[var(--gray-200)]">
              Data
            </p>
            <div className="flex items-center gap-2 border border-[var(--gray-500)] rounded-md px-3 py-2 text-[var(--gray-200)]">
              <Icon
                svg={CalendarIcon}
                className="w-5 h-5 fill-[var(--gray-400)]"
              />
              <span>{selectedDate}</span>
            </div>
          </div>

          {/* Horários */}
          <div className="mb-4">
            <p className="text-sm font-medium mb-2 block text-[var(--gray-200)]">
              Horários
            </p>

            <div className="mb-2">
              <p className="text-[var(--gray-300)] text-xs mb-1">Manhã</p>
              <div className="flex flex-wrap gap-2">
                {morningTimes.map((time) => (
                  <TimeSelect
                    key={time}
                    time={time}
                    state={selectedTime === time ? "selected" : "default"}
                    onClick={() => setSelectedTime(time)}
                  />
                ))}
              </div>
            </div>

            <div className="mb-2">
              <p className="text-[var(--gray-300)] text-xs mb-1">Tarde</p>
              <div className="flex flex-wrap gap-2">
                {afternoonTimes.map((time) => (
                  <TimeSelect
                    key={time}
                    time={time}
                    state={selectedTime === time ? "selected" : "default"}
                    onClick={() => setSelectedTime(time)}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-[var(--gray-300)] text-xs mb-1">Noite</p>
              <div className="flex flex-wrap gap-2">
                {nightTimes.map((time) => (
                  <TimeSelect
                    key={time}
                    time={time}
                    state={selectedTime === time ? "selected" : "default"}
                    onClick={() => setSelectedTime(time)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Cliente */}
          <div className="mb-4">
            <label
              htmlFor="client-name"
              className="text-sm font-medium mb-1 block text-[var(--gray-200)]"
            >
              Cliente
            </label>
            <TextInput
              id="client-name"
              placeholder="Nome do cliente"
              value={clientName}
              onChange={handleClientNameChange}
            />
          </div>

          {/* Botão */}
          <Button>AGENDAR</Button>
        </div>

        {/* Agenda — Listagem */}
        <div className="flex flex-col w-2/3 bg-[var(--gray-900)] rounded-md p-6">
          <header className="flex justify-between items-center mb-4">
            <h2 className="text-white font-semibold">Sua agenda</h2>
            <div className="flex items-center gap-2 border border-[var(--gray-500)] rounded-md px-3 py-2 text-[var(--gray-200)]">
              <Icon
                svg={CalendarIcon}
                className="w-5 h-5 fill-[var(--gray-400)]"
              />
              <span>{selectedDate}</span>
            </div>
          </header>

          {/* Manhã */}
          <section className="mb-4">
            <div className="border rounded-md border-[var(--gray-600)] py-3">
              <h3 className="px-3 flex items-center gap-2 text-[var(--gray-300)] text-sm mb-2">
                <Icon
                  svg={MorningIcon}
                  className="w-5 h-5 fill-[var(--yellow)]"
                  aria-hidden="true"
                />
                Manhã (09h–12h)
              </h3>
              {appointments.morning.map(({ time, client }) => (
                <div
                  key={time}
                  className="flex justify-between items-center border-t border-[var(--gray-600)] px-3 py-2 mb-2 text-[var(--gray-200)]"
                >
                  <div className="flex gap-4">
                    <span className="text-[var(--gray-200)] font-semibold">
                      {time}
                    </span>
                    <span>{client}</span>
                  </div>
                  <ButtonIcon
                    icon={TrachIcon}
                    className="fill-[var(--yellow)]"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Tarde */}
          <section className="mb-4">
            <div className="border rounded-md border-[var(--gray-600)] py-3">
              <h3 className="flex items-center gap-2 text-[var(--gray-300)] text-sm mb-2 px-3">
                <Icon
                  svg={AfternoonIcon}
                  className="w-5 h-5 fill-[var(--yellow)]"
                  aria-hidden="true"
                />
                Tarde (13h–18h)
              </h3>
              {appointments.afternoon.map(({ time, client }) => (
                <div
                  key={time}
                  className="flex justify-between items-center border-t border-[var(--gray-600)] px-3 py-2 mb-2 text-[var(--gray-200)]"
                >
                  <div className="flex gap-4">
                    <span className="text-[var(--gray-200)] font-semibold">
                      {time}
                    </span>
                    <span>{client}</span>
                  </div>
                  <ButtonIcon
                    icon={TrachIcon}
                    className="fill-[var(--yellow)]"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Noite */}
          <section>
            <div className="border rounded-md border-[var(--gray-600)] py-3">
              <h3 className="flex items-center gap-2 text-[var(--gray-300)] text-sm mb-2 px-3">
                <Icon
                  svg={NightIcon}
                  className="w-5 h-5 fill-[var(--yellow)]"
                  aria-hidden="true"
                />
                Noite (19h–21h)
              </h3>
              {appointments.night.map(({ time, client }) => (
                <div
                  key={time}
                  className="flex justify-between items-center border-t border-[var(--gray-600)] px-3 py-2 text-[var(--gray-200)]"
                >
                  <div className="flex gap-4">
                    <span className="text-[var(--gray-200)] font-bold">
                      {time}
                    </span>
                    <span>{client}</span>
                  </div>
                  <ButtonIcon
                    icon={TrachIcon}
                    className="fill-[var(--yellow)]"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
