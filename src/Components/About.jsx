import React from "react";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaMap } from "react-icons/fa";
import {
  SALES_DISPLAY,
  SALES_TEL_LINK,
  SALES_WHATSAPP_LINK,
  BUSINESS_HOURS,
  CONTACT_EMAIL,
} from "../data/contactInfo";
import { SHOWROOMS, PRIMARY_SHOWROOM } from "../data/showrooms";

const heroHighlights = [
  "Full showroom walk-through before every purchase",
  "Experienced technicians keeping your vehicle factory-fresh",
  "Fast responses via WhatsApp, phone, or in-person visits",
];

const styles = {
  root: {
    background: "#030712",
    color: "#f8fafc",
    minHeight: "100vh",
    paddingBottom: 64,
  },
  container: {
    maxWidth: 1140,
    margin: "0 auto",
    padding: "64px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 48,
  },
  hero: {
    padding: 32,
    borderRadius: 28,
    background: "linear-gradient(135deg, rgba(14,165,233,0.12), rgba(236,72,153,0.08))",
    border: "1px solid rgba(148,163,184,0.25)",
  },
  tagline: {
    fontSize: 14,
    letterSpacing: 4,
    textTransform: "uppercase",
    color: "#38bdf8",
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 48,
    margin: 0,
    fontWeight: 800,
  },
  heroBody: {
    marginTop: 16,
    fontSize: 18,
    lineHeight: 1.8,
    color: "#cbd5e1",
  },
  highlightGrid: {
    marginTop: 26,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 14,
  },
  highlight: {
    background: "rgba(15,23,42,0.7)",
    borderRadius: 14,
    padding: "18px 16px",
    border: "1px solid rgba(148,163,184,0.15)",
    fontWeight: 600,
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },
  infoCard: {
    background: "#0f172a",
    borderRadius: 18,
    padding: 20,
    border: "1px solid rgba(148,163,184,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    minHeight: 150,
  },
  infoLabel: {
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#94a3b8",
  },
  infoValue: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    fontSize: 20,
    fontWeight: 600,
  },
  link: {
    color: "#38bdf8",
    textDecoration: "none",
    fontWeight: 600,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  sectionTitle: {
    margin: 0,
    fontSize: 32,
  },
  sectionBody: {
    margin: 0,
    color: "#cbd5e1",
    lineHeight: 1.7,
  },
  showroomList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 18,
  },
  showroomCard: {
    background: "#0b1222",
    borderRadius: 16,
    border: "1px solid rgba(148,163,184,0.2)",
    padding: 18,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  showroomName: {
    margin: 0,
    fontSize: 18,
    fontWeight: 700,
  },
  showroomText: {
    margin: 0,
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 1.5,
  },
  showroomLink: {
    color: "#0ea5e9",
    textDecoration: "none",
    fontWeight: 600,
  },
};

const InfoRow = ({ icon, label, value, href }) => (
  <article style={styles.infoCard}>
    <span style={styles.infoLabel}>{label}</span>
    <div style={styles.infoValue}>
      {icon}
      {href ? (
        <a href={href} style={styles.link}>
          {value}
        </a>
      ) : (
        <span style={{ color: "#e2e8f0" }}>{value}</span>
      )}
    </div>
  </article>
);

export default function About() {
  return (
    <main style={styles.root}>
      <div style={styles.container}>
        <section style={styles.hero}>
          <p style={styles.tagline}>Customer-first care</p>
          <h1 style={styles.heroTitle}>About Sri Balaji Motors</h1>
          <p style={styles.heroBody}>
            Sri Balaji Motors is a multi-brand sales and service partner for busy Bangalore
            drivers. We blend friendly showroom guidance with meticulous post-sale care, so
            every visit feels effortless whether you are buying a new vehicle or scheduling a
            routine service.
          </p>
          <div style={styles.highlightGrid}>
            {heroHighlights.map((highlight) => (
              <div key={highlight} style={styles.highlight}>
                {highlight}
              </div>
            ))}
          </div>
        </section>

        <section style={styles.infoGrid}>
          <InfoRow
            icon={<FaPhone />}
            label="Talk to Sales"
            value={SALES_DISPLAY}
            href={SALES_TEL_LINK}
          />
          <InfoRow
            icon={<FaEnvelope />}
            label="Email Us"
            value={CONTACT_EMAIL}
            href={`mailto:${CONTACT_EMAIL}`}
          />
          <InfoRow
            icon={<FaClock />}
            label="Business Hours"
            value={BUSINESS_HOURS}
          />
          <InfoRow
            icon={<FaMapMarkerAlt />}
            label="Visit Primary Showroom"
            value={PRIMARY_SHOWROOM?.name || "Primary showroom"}
            href={PRIMARY_SHOWROOM?.mapUrl}
          />
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Meet our showrooms</h2>
          <p style={styles.sectionBody}>
            Drop by either of our locations for sales, service, parts, or to just ask a
            question. We keep both showrooms stocked with demo vehicles and staffed with
            sales consultants, service advisors, and technicians who speak Kannada, Telugu, and
            English.
          </p>
          <div style={styles.showroomList}>
            {SHOWROOMS.map((showroom) => (
              <article key={showroom.id} style={styles.showroomCard}>
                <h3 style={styles.showroomName}>{showroom.name}</h3>
                <p style={styles.showroomText}>{showroom.address}</p>
                {showroom.phone && (
                  <p style={styles.showroomText}>
                    <FaPhone size={14} style={{ marginRight: 6 }} />
                    {showroom.phone}
                  </p>
                )}
                {showroom.mapUrl && (
                  <a
                    href={showroom.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.showroomLink}
                  >
                    <FaMap size={14} style={{ marginRight: 6 }} />
                    View on map
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Stay connected</h2>
          <p style={styles.sectionBody}>
            Share vehicle photos, service requests, or spec questions over WhatsApp for the
            fastest replies. We reply across the day and even after hours for emergencies.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={SALES_WHATSAPP_LINK} style={styles.link}>
              Chat via WhatsApp
            </a>
            <a href={SALES_TEL_LINK} style={styles.link}>
              Call Sales
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
