export function loader({ params: { date } }: { params: { date: string } }) {
  return new Response("a,b,c", {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment;filename=Transaction Report ${date}.csv`,
    },
  });
}
