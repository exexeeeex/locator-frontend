import { useEffect, useMemo, useState } from "react";

import { useSubscribe } from "@/features/subscribe/model/hooks";

export const useSubscribeList = () => {
	const { data: subscribes, ...rest } = useSubscribe();

	const defaultPlan = useMemo(() => {
		return (
			subscribes?.find((x) => x.name.toLowerCase() === "premium") ??
			subscribes?.[0]
		);
	}, [subscribes]);

	const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>();

	useEffect(() => {
		if (!defaultPlan) return;

		setSelectedPlanId((prev) => prev ?? defaultPlan.id);
	}, [defaultPlan]);

	const selectedPlan =
		subscribes?.find((x) => x.id === selectedPlanId) ?? defaultPlan;

	const otherPlans = subscribes?.filter((x) => x.id !== selectedPlan?.id);

	const selectPlan = (id: string) => {
		setSelectedPlanId(id);
	};

	return {
		subscribes,
		selectedPlan,
		otherPlans,
		selectedPlanId,
		selectPlan,

		...rest,
	};
};
