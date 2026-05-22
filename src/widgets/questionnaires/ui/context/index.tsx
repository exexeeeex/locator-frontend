import type { InteractionType } from "@/entities/interaction/model/types";
import type { UserProfile } from "@/entities/user";
import { createContext, useContext } from "react";

type QuestionnariesContextType = {
  candidate: UserProfile;
  isVisibleInfoBlock: boolean;
  toggleInfoBlock: () => void;
  handleInteract: (
    targetUserId: string,
    type: InteractionType,
  ) => Promise<void>;
  skip: () => void;
};

export const QuestionnariesContext =
  createContext<QuestionnariesContextType | null>(null);

export const useQuestionnariesContext = () => {
  const context = useContext(QuestionnariesContext);

  if (!context)
    throw new Error(
      "useQuestionnariesContext must be used within Questionnaries",
    );

  return context;
};
