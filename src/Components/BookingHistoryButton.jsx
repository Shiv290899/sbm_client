import React, { useState } from "react";
import { Button, Grid, Modal } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import FollowUps from "./FollowUps";

export default function BookingHistoryButton({ webhookUrl }) {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button icon={<HistoryOutlined />} onClick={() => setOpen(true)}>
        Booking History
      </Button>
      <Modal
        open={open}
        title=""
        footer={null}
        onCancel={() => setOpen(false)}
        destroyOnClose
        width={isMobile ? "100%" : "92vw"}
        bodyStyle={{ padding: 0 }}
      >
        {open ? (
          <FollowUps
            mode="booking"
            webhookUrl={webhookUrl}
            onClose={() => setOpen(false)}
          />
        ) : null}
      </Modal>
    </>
  );
}
