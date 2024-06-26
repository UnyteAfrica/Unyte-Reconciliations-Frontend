import { Agent } from "@/types/types";
import { PageContent } from "@/components/shared/page-content";
import { AgentsTable } from "@/components/tables/agents-table";

const agents: Agent[] = [
  {
    id: "ID-023535393",
    commissions: 50000,
    policiesSold: 234,
    name: "Segun Odegbami",
  },
  {
    id: "ID-023535394",
    commissions: 52000,
    policiesSold: 378,
    name: "Taiye Taiwo",
  },
  {
    id: "ID-023535395",
    commissions: 53500,
    policiesSold: 98,
    name: "Osaze Odemwingie",
  },
  {
    id: "ID-023535396",
    commissions: 28200,
    policiesSold: 25,
    name: "Kanu Nwankwo",
  },
  {
    id: "ID-023535397",
    commissions: 6203,
    policiesSold: 394,
    name: "Sunday Oliseh",
  },
];

export const CompanyAgents = () => {
  return (
    <PageContent
      title="Agents"
      searchbarPlaceholder="Find Agent ID"
      pageTable={<AgentsTable agents={agents} />}
    />
  );
};
