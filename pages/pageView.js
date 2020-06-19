import React, { useState } from "react";
import { useRouter } from 'next/router'
const PageViews = () => {
  const router = useRouter();
  const order_id = router.query.order_id;
  return <div>PageViews <br/> order_id = {order_id}</div>;
};
export default PageViews;
