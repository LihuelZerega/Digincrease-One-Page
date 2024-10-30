  import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  
  export default function MyApp() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"30min"});
		cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#ffffff"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <Cal namespace="30min"
	  calLink="digincrease/asesoria-gratuita-inicial"
	  style={{width:"100%",height:"100%",overflow:"scroll"}}
	  config={{"layout":"month_view","theme":"light"}}
    
	  
	/>;
  };
  