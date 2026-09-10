"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Search,
  Bell,
  CheckCircle2,
  Calendar,
  Users,
  Shield,
  Key,
  Activity,
  Layers,
  Settings,
  TrendingUp,
  Clock,
  Database,
  Truck,
  ShoppingCart,
  FileText,
  BarChart3,
  Server,
  Zap,
} from "lucide-react";
import styles from "./Projects.module.css";

interface ProjectFeature {
  num: string;
  title: string;
  desc: string;
}

interface StatCardData {
  label: string;
  value: string;
  trend: string;
  trendType?: "green" | "blue";
  iconType: "users" | "shield" | "key" | "activity" | "dollar" | "chart" | "file" | "truck" | "server" | "zap";
}

interface ActivityRowData {
  primary: string;
  secondary: string;
  time: string;
  iconBg: string;
  iconColor: string;
}

interface RoleRowData {
  role: string;
  desc: string;
  badgeText: string;
  badgeType: "badgeGreen" | "badgeBlue" | "badgeOrange" | "badgeGray" | "badgePurple";
}

interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  features: ProjectFeature[];
  liveDemoUrl: string;
  githubUrl: string;
  screen: {
    appName: string;
    searchPlaceholder: string;
    userRole: string;
    userInitial: string;
    sidebarItems: { name: string; icon: string; active?: boolean }[];
    heading: string;
    subheading: string;
    dateText: string;
    stats: StatCardData[];
    leftCardTitle: string;
    leftCardAction: string;
    activities: ActivityRowData[];
    rightCardTitle: string;
    rightCardSub: string;
    roles: RoleRowData[];
  };
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: "01",
    title: "Role Based Authentication System.",
    category: "FEATURED PROJECT",
    description:
      "A secure and scalable authentication system built with Django, featuring role-based access control (RBAC) to manage user permissions across different modules and functionalities.",
    tags: ["Python", "Django", "SQLite", "JWT", "RBAC"],
    features: [
      {
        num: "01",
        title: "Secure Authentication",
        desc: "User registration, login, logout with hashed passwords and JWT based sessions.",
      },
      {
        num: "02",
        title: "Role Based Access Control",
        desc: "Different access levels for Admin, Manager and User roles.",
      },
      {
        num: "03",
        title: "Modular & Scalable",
        desc: "Easy to integrate with other Django projects and extend with new roles and permissions.",
      },
      {
        num: "04",
        title: "Audit & Activity Logs",
        desc: "Track user activities for better security and monitoring.",
      },
    ],
    liveDemoUrl: "https://demo.bhoomit.dev/auth-system",
    githubUrl: "https://github.com/bhoomit-rachchawar/role-based-auth-django",
    screen: {
      appName: "AuthSystem",
      searchPlaceholder: "Search users, roles, permissions...",
      userRole: "Admin",
      userInitial: "A",
      sidebarItems: [
        { name: "Dashboard", icon: "dashboard", active: true },
        { name: "Users", icon: "users" },
        { name: "Roles", icon: "roles" },
        { name: "Permissions", icon: "permissions" },
        { name: "Activity Logs", icon: "activity" },
        { name: "Settings", icon: "settings" },
      ],
      heading: "Welcome Back, Admin",
      subheading: "Manage users, roles and permissions with confidence.",
      dateText: "Mon, 7 Apr 2025",
      stats: [
        { label: "Total Users", value: "124", trend: "↑ 12%", trendType: "green", iconType: "users" },
        { label: "Active Roles", value: "6", trend: "↑ 0%", trendType: "green", iconType: "shield" },
        { label: "Permissions", value: "24", trend: "↑ 20%", trendType: "green", iconType: "key" },
        { label: "Recent Logins", value: "18", trend: "↑ 28%", trendType: "blue", iconType: "zap" },
      ],
      leftCardTitle: "Recent Activity",
      leftCardAction: "View All",
      activities: [
        {
          primary: "New user registered",
          secondary: "prajwal@company.com",
          time: "2 mins ago",
          iconBg: "#eef4fe",
          iconColor: "#1a6bd8",
        },
        {
          primary: "Role updated",
          secondary: "Changed role to Manager",
          time: "12 mins ago",
          iconBg: "#feefef",
          iconColor: "#e53e3e",
        },
        {
          primary: "Permission granted",
          secondary: "Access to CRM module",
          time: "1 hour ago",
          iconBg: "#fef8ee",
          iconColor: "#dd6b20",
        },
        {
          primary: "User logged in",
          secondary: "admin@company.com",
          time: "2 hours ago",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
      ],
      rightCardTitle: "Role Permissions",
      rightCardSub: "Manage access for each role",
      roles: [
        {
          role: "Admin",
          desc: "Full access to all modules",
          badgeText: "Full Access",
          badgeType: "badgeGreen",
        },
        {
          role: "Manager",
          desc: "Access to team and projects",
          badgeText: "Limited Access",
          badgeType: "badgeBlue",
        },
        {
          role: "User",
          desc: "Access to assigned modules",
          badgeText: "Restricted",
          badgeType: "badgeGray",
        },
      ],
    },
  },
  {
    id: "02",
    title: "Professional Enterprise CRM.",
    category: "FEATURED PROJECT",
    description:
      "A comprehensive sales pipeline and customer management platform built with Django & PostgreSQL, featuring automated lead scoring, deal stage tracking, and revenue forecasting.",
    tags: ["Python", "Django", "PostgreSQL", "Celery", "Redis", "TailwindCSS"],
    features: [
      {
        num: "01",
        title: "Lead & Pipeline Tracking",
        desc: "Visual sales funnel with automated stage progression and conversion metrics.",
      },
      {
        num: "02",
        title: "Automated Email Sequences",
        desc: "Background Celery workers managing trigger-based outreach and client follow-ups.",
      },
      {
        num: "03",
        title: "Role-Based Sales Security",
        desc: "Granular access control isolating deals between sales reps, managers, and directors.",
      },
      {
        num: "04",
        title: "Revenue Forecasting",
        desc: "Interactive win probability models and closed-won analytics dashboard.",
      },
    ],
    liveDemoUrl: "https://demo.bhoomit.dev/pro-crm",
    githubUrl: "https://github.com/bhoomit-rachchawar/professional-django-crm",
    screen: {
      appName: "PulseCRM",
      searchPlaceholder: "Search leads, deals, accounts...",
      userRole: "Sales Lead",
      userInitial: "P",
      sidebarItems: [
        { name: "Pipeline", icon: "dashboard", active: true },
        { name: "Leads", icon: "users" },
        { name: "Deals", icon: "roles" },
        { name: "Contacts", icon: "permissions" },
        { name: "Analytics", icon: "activity" },
        { name: "Settings", icon: "settings" },
      ],
      heading: "Pipeline & Sales Overview",
      subheading: "Track real-time conversions and deal velocity.",
      dateText: "Tue, 8 Apr 2025",
      stats: [
        { label: "Pipeline Value", value: "$248.5K", trend: "↑ 18%", trendType: "green", iconType: "dollar" },
        { label: "Active Leads", value: "84", trend: "↑ 14%", trendType: "green", iconType: "users" },
        { label: "Deals Won", value: "32", trend: "↑ 22%", trendType: "green", iconType: "shield" },
        { label: "Win Rate", value: "41.6%", trend: "↑ 6%", trendType: "blue", iconType: "chart" },
      ],
      leftCardTitle: "Active Deal Stages",
      leftCardAction: "Filter Deals",
      activities: [
        {
          primary: "Apex Global Tech",
          secondary: "$48,000 • Enterprise Plan",
          time: "Negotiation",
          iconBg: "#eef4fe",
          iconColor: "#1a6bd8",
        },
        {
          primary: "FinTech Systems",
          secondary: "$36,500 • Cloud Migration",
          time: "Proposal Sent",
          iconBg: "#fef8ee",
          iconColor: "#dd6b20",
        },
        {
          primary: "CloudScale Infra",
          secondary: "$22,000 • Annual Contract",
          time: "Signed",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
        {
          primary: "Starlight Retail",
          secondary: "$14,000 • API Integration",
          time: "Discovery",
          iconBg: "#f2eefa",
          iconColor: "#6e40c9",
        },
      ],
      rightCardTitle: "Lead Distribution",
      rightCardSub: "Conversion by acquisition channel",
      roles: [
        {
          role: "Enterprise Inbound",
          desc: "52% conversion • High intent",
          badgeText: "High Priority",
          badgeType: "badgeGreen",
        },
        {
          role: "Partner Network",
          desc: "34% conversion • Qualified",
          badgeText: "Qualified",
          badgeType: "badgeBlue",
        },
        {
          role: "Cold Campaigns",
          desc: "14% conversion • Nurturing",
          badgeText: "Nurturing",
          badgeType: "badgeGray",
        },
      ],
    },
  },
  {
    id: "03",
    title: "AI Document Intelligence & Parser.",
    category: "FEATURED PROJECT",
    description:
      "An automated document processing engine built with FastAPI, LangChain, and ChromaDB, extracting structured invoice data, contracts, and metadata with high precision vector search.",
    tags: ["Python", "FastAPI", "LangChain", "ChromaDB", "Docker", "PyPDF"],
    features: [
      {
        num: "01",
        title: "Multimodal PDF Extraction",
        desc: "Extract tabular records, invoice items, and legal clauses with 99.4% accuracy.",
      },
      {
        num: "02",
        title: "Semantic Vector Retrieval",
        desc: "Instant hybrid search across thousands of pages using dense embeddings with ChromaDB.",
      },
      {
        num: "03",
        title: "Async Background Parsing",
        desc: "High-concurrency Celery task workers capable of processing 500+ pages per minute.",
      },
      {
        num: "04",
        title: "Schema Webhooks & ERP Export",
        desc: "Pydantic-enforced JSON validation with automated webhook delivery to ERPs.",
      },
    ],
    liveDemoUrl: "https://demo.bhoomit.dev/documind",
    githubUrl: "https://github.com/bhoomit-rachchawar/ai-document-intelligence",
    screen: {
      appName: "DocuMind AI",
      searchPlaceholder: "Query ingested documents, vectors or text...",
      userRole: "Parser v3",
      userInitial: "D",
      sidebarItems: [
        { name: "Documents", icon: "dashboard", active: true },
        { name: "Extraction", icon: "users" },
        { name: "Vector DB", icon: "roles" },
        { name: "Schemas", icon: "permissions" },
        { name: "Webhooks", icon: "activity" },
        { name: "Settings", icon: "settings" },
      ],
      heading: "Document Intelligence Center",
      subheading: "Automated OCR extraction and vector embedding pipeline.",
      dateText: "Wed, 9 Apr 2025",
      stats: [
        { label: "Ingested Docs", value: "1,842", trend: "↑ 34%", trendType: "green", iconType: "file" },
        { label: "Extraction Acc.", value: "99.4%", trend: "↑ 1.2%", trendType: "green", iconType: "shield" },
        { label: "Avg Latency", value: "128ms", trend: "↓ 14ms", trendType: "green", iconType: "zap" },
        { label: "Vector Chunks", value: "42.8K", trend: "↑ 18%", trendType: "blue", iconType: "server" },
      ],
      leftCardTitle: "Live Ingestion Queue",
      leftCardAction: "Inspect",
      activities: [
        {
          primary: "Invoice_Apex_4091.pdf",
          secondary: "14 Line items extracted",
          time: "100% Extracted",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
        {
          primary: "MasterServices_v2.docx",
          secondary: "Semantic embeddings mapped",
          time: "Indexed",
          iconBg: "#eef4fe",
          iconColor: "#1a6bd8",
        },
        {
          primary: "Q1_Financial_Report.pdf",
          secondary: "OCR Table normalization",
          time: "Completed",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
        {
          primary: "Tax_Statement_2025.pdf",
          secondary: "Entity recognition & verification",
          time: "Processing",
          iconBg: "#fef8ee",
          iconColor: "#dd6b20",
        },
      ],
      rightCardTitle: "Extracted Entities",
      rightCardSub: "Apex Logistics LLC Invoice",
      roles: [
        {
          role: "Vendor Name",
          desc: "Apex Logistics LLC",
          badgeText: "99.8% Conf",
          badgeType: "badgeGreen",
        },
        {
          role: "Total Amount",
          desc: "$18,450.00 USD payable",
          badgeText: "100% Conf",
          badgeType: "badgeGreen",
        },
        {
          role: "Tax Identifier",
          desc: "EIN-948211029",
          badgeText: "Verified",
          badgeType: "badgeBlue",
        },
      ],
    },
  },
  {
    id: "04",
    title: "Real-Time Fleet & Telemetry Tracker.",
    category: "FEATURED PROJECT",
    description:
      "A high-performance live fleet telematics platform built with Django Channels and WebSockets, delivering real-time vehicle GPS tracking, geofence alerts, and route optimization.",
    tags: ["Python", "Django Channels", "WebSockets", "Redis", "Leaflet", "GeoDjango"],
    features: [
      {
        num: "01",
        title: "Sub-Second WebSocket Feed",
        desc: "Bidirectional telemetry stream supporting thousands of simultaneous GPS coordinates.",
      },
      {
        num: "02",
        title: "Automated Geofencing",
        desc: "Spatial polygon intersection queries triggering real-time route breach alerts.",
      },
      {
        num: "03",
        title: "Route Playback & Diagnostics",
        desc: "Time-series spatial playback analyzing driver speed, idle time, and fuel rate.",
      },
      {
        num: "04",
        title: "Predictive Maintenance",
        desc: "OBD-II telemetry parsing generating automated engine diagnostic warnings.",
      },
    ],
    liveDemoUrl: "https://demo.bhoomit.dev/fleetpulse",
    githubUrl: "https://github.com/bhoomit-rachchawar/realtime-fleet-telematics",
    screen: {
      appName: "FleetPulse",
      searchPlaceholder: "Search vehicle ID, route or driver...",
      userRole: "Dispatch",
      userInitial: "F",
      sidebarItems: [
        { name: "Live Map", icon: "dashboard", active: true },
        { name: "Vehicles", icon: "users" },
        { name: "Routes", icon: "roles" },
        { name: "Geofences", icon: "permissions" },
        { name: "Maintenance", icon: "activity" },
        { name: "Settings", icon: "settings" },
      ],
      heading: "Active Fleet Telematics",
      subheading: "38 Vehicles currently on active commercial routes.",
      dateText: "Thu, 10 Apr 2025",
      stats: [
        { label: "Active Vehicles", value: "38 / 42", trend: "↑ 90%", trendType: "green", iconType: "truck" },
        { label: "Avg Fuel Eff.", value: "14.2 km/l", trend: "↑ 4%", trendType: "green", iconType: "activity" },
        { label: "On-Time Rate", value: "98.6%", trend: "↑ 1.8%", trendType: "green", iconType: "shield" },
        { label: "Alerts", value: "0 Crit", trend: "Normal", trendType: "blue", iconType: "zap" },
      ],
      leftCardTitle: "Live Telemetry Feed",
      leftCardAction: "Live Radar",
      activities: [
        {
          primary: "Hauler Unit-08",
          secondary: "Route 101 North • 68 km/h",
          time: "In Transit",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
        {
          primary: "Transit Van-14",
          secondary: "Downtown Terminal • 34 km/h",
          time: "Delivering",
          iconBg: "#eef4fe",
          iconColor: "#1a6bd8",
        },
        {
          primary: "Heavy Freight-02",
          secondary: "Central Logistics Hub • 0 km/h",
          time: "Docked",
          iconBg: "#fef8ee",
          iconColor: "#dd6b20",
        },
        {
          primary: "Express Hauler-09",
          secondary: "Metro Corridor • 72 km/h",
          time: "En Route",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
      ],
      rightCardTitle: "Geofence Zones",
      rightCardSub: "Regional transit monitor",
      roles: [
        {
          role: "North Port Terminal",
          desc: "3 commercial vehicles inside",
          badgeText: "Clear",
          badgeType: "badgeGreen",
        },
        {
          role: "Metro Corridor",
          desc: "High traffic detour active",
          badgeText: "Rerouted",
          badgeType: "badgeBlue",
        },
        {
          role: "Industrial Depot",
          desc: "Cargo unloading on schedule",
          badgeText: "Docked",
          badgeType: "badgeGray",
        },
      ],
    },
  },
  {
    id: "05",
    title: "High-Throughput E-Commerce Microservices.",
    category: "FEATURED PROJECT",
    description:
      "A distributed e-commerce backend and API gateway built with FastAPI, PostgreSQL, RabbitMQ, and Redis, designed for atomic inventory locks, transaction consistency, and sub-20ms latency.",
    tags: ["Python", "FastAPI", "RabbitMQ", "PostgreSQL", "Redis", "Docker"],
    features: [
      {
        num: "01",
        title: "Atomic Distributed Locks",
        desc: "Redis Redlock algorithm preventing overselling during flash-sale concurrency.",
      },
      {
        num: "02",
        title: "Event-Driven Order Queue",
        desc: "RabbitMQ exchange broadcasting order events to payment, inventory, and notify.",
      },
      {
        num: "03",
        title: "Sub-20ms Latency Engine",
        desc: "Asynchronous asyncpg connection pool with multi-tier Redis cache warming.",
      },
      {
        num: "04",
        title: "Resilient Circuit Breaker",
        desc: "Fault-tolerant payment gateway fallback with automatic exponential backoff.",
      },
    ],
    liveDemoUrl: "https://demo.bhoomit.dev/ordermesh",
    githubUrl: "https://github.com/bhoomit-rachchawar/ecommerce-microservices-fastapi",
    screen: {
      appName: "OrderMesh",
      searchPlaceholder: "Search transaction ID, order or SKU...",
      userRole: "Gateway",
      userInitial: "O",
      sidebarItems: [
        { name: "Mesh Health", icon: "dashboard", active: true },
        { name: "Orders", icon: "users" },
        { name: "Payments", icon: "roles" },
        { name: "Inventory", icon: "permissions" },
        { name: "RabbitMQ", icon: "activity" },
        { name: "Settings", icon: "settings" },
      ],
      heading: "API Gateway & Order Mesh",
      subheading: "Real-time transaction throughput and distributed nodes.",
      dateText: "Fri, 11 Apr 2025",
      stats: [
        { label: "Throughput", value: "4,820 RPS", trend: "↑ 12%", trendType: "green", iconType: "zap" },
        { label: "Daily Volume", value: "$142.8K", trend: "↑ 24%", trendType: "green", iconType: "dollar" },
        { label: "P99 Latency", value: "18ms", trend: "↓ 3ms", trendType: "green", iconType: "activity" },
        { label: "Mesh Uptime", value: "99.99%", trend: "Healthy", trendType: "blue", iconType: "server" },
      ],
      leftCardTitle: "Microservice Health",
      leftCardAction: "RPC Monitor",
      activities: [
        {
          primary: "Auth Service",
          secondary: "9ms latency • 0.01% err rate",
          time: "Healthy",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
        {
          primary: "Order Service",
          secondary: "14ms latency • 0 errors",
          time: "Healthy",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
        {
          primary: "Stripe Payment Gateway",
          secondary: "22ms latency • 100% captured",
          time: "Healthy",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
        {
          primary: "Inventory Service",
          secondary: "11ms latency • atomic locked",
          time: "Healthy",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
      ],
      rightCardTitle: "Recent Transactions",
      rightCardSub: "Live settlement stream",
      roles: [
        {
          role: "TXN-94821",
          desc: "$249.00 • 3 items locked",
          badgeText: "Captured",
          badgeType: "badgeGreen",
        },
        {
          role: "TXN-94822",
          desc: "$1,180.00 • Enterprise tier",
          badgeText: "Settled",
          badgeType: "badgeGreen",
        },
        {
          role: "TXN-94823",
          desc: "$89.50 • RabbitMQ dispatch",
          badgeText: "Queued",
          badgeType: "badgeBlue",
        },
      ],
    },
  },
  {
    id: "06",
    title: "Automated ETL & Market Intelligence.",
    category: "FEATURED PROJECT",
    description:
      "A production-grade web scraping and ETL data pipeline built with Python, Scrapy, Pandas, and Apache Airflow, harvesting and warehousing multi-source price trends and competitor stocks.",
    tags: ["Python", "Scrapy", "Pandas", "Airflow", "PostgreSQL", "BeautifulSoup"],
    features: [
      {
        num: "01",
        title: "Automated Spider Swarm",
        desc: "Airflow DAGs orchestrating distributed crawlers with smart rotating proxies.",
      },
      {
        num: "02",
        title: "Data Cleansing & Validation",
        desc: "Automated schema verification and anomaly detection with Pandas.",
      },
      {
        num: "03",
        title: "Competitor Price Alerting",
        desc: "Instant notifications when competitor stock levels or pricing changes occur.",
      },
      {
        num: "04",
        title: "Automated Warehousing",
        desc: "Incremental UPSERT into PostgreSQL with normalized analytics schema.",
      },
    ],
    liveDemoUrl: "https://demo.bhoomit.dev/dataflow-etl",
    githubUrl: "https://github.com/bhoomit-rachchawar/automated-etl-market-scraper",
    screen: {
      appName: "DataFlow ETL",
      searchPlaceholder: "Search spider tasks, proxies, catalogs...",
      userRole: "Airflow",
      userInitial: "D",
      sidebarItems: [
        { name: "Pipelines", icon: "dashboard", active: true },
        { name: "Spiders", icon: "users" },
        { name: "Proxies", icon: "roles" },
        { name: "Warehouse", icon: "permissions" },
        { name: "Alerts", icon: "activity" },
        { name: "Settings", icon: "settings" },
      ],
      heading: "ETL Orchestration Monitor",
      subheading: "Continuous distributed data harvesting and warehousing.",
      dateText: "Sat, 12 Apr 2025",
      stats: [
        { label: "Records Harvested", value: "1.28M", trend: "↑ 18%", trendType: "green", iconType: "server" },
        { label: "Active Spiders", value: "16", trend: "↑ 2", trendType: "green", iconType: "zap" },
        { label: "Pipeline Success", value: "99.8%", trend: "↑ 0.2%", trendType: "green", iconType: "shield" },
        { label: "Proxy Health", value: "98.4%", trend: "Clean", trendType: "blue", iconType: "activity" },
      ],
      leftCardTitle: "Airflow DAG Logs",
      leftCardAction: "View DAG",
      activities: [
        {
          primary: "market_daily_crawl",
          secondary: "Scrapy 16 spiders • 4m 12s",
          time: "Success",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
        {
          primary: "price_normalizer",
          secondary: "Pandas cleansing • 1m 45s",
          time: "Success",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
        {
          primary: "anomaly_detector",
          secondary: "Outlier detection • 52s",
          time: "Success",
          iconBg: "#eefcf2",
          iconColor: "#22c55e",
        },
        {
          primary: "postgres_upsert",
          secondary: "Warehouse sync • 28s",
          time: "Running",
          iconBg: "#eef4fe",
          iconColor: "#1a6bd8",
        },
      ],
      rightCardTitle: "Market Price Shifts",
      rightCardSub: "Real-time competitor analytics",
      roles: [
        {
          role: "Retailer Alpha",
          desc: "142 SKUs marked down -8%",
          badgeText: "Price Drop",
          badgeType: "badgeBlue",
        },
        {
          role: "Merchant Beta",
          desc: "28 high-velocity items out of stock",
          badgeText: "Stockout",
          badgeType: "badgeOrange",
        },
        {
          role: "Vendor Gamma",
          desc: "+450 catalog SKUs added",
          badgeText: "Synced",
          badgeType: "badgeGreen",
        },
      ],
    },
  },
];

function renderStatIcon(type: StatCardData["iconType"]) {
  const size = 11;
  switch (type) {
    case "users":
      return <Users size={size} color="#1a6bd8" />;
    case "shield":
      return <Shield size={size} color="#22c55e" />;
    case "key":
      return <Key size={size} color="#22c55e" />;
    case "activity":
      return <Activity size={size} color="#dd6b20" />;
    case "dollar":
      return <TrendingUp size={size} color="#1a6bd8" />;
    case "chart":
      return <BarChart3 size={size} color="#1a6bd8" />;
    case "file":
      return <FileText size={size} color="#1a6bd8" />;
    case "truck":
      return <Truck size={size} color="#1a6bd8" />;
    case "server":
      return <Server size={size} color="#1a6bd8" />;
    case "zap":
    default:
      return <Zap size={size} color="#1a6bd8" />;
  }
}

function renderSidebarIcon(icon: string) {
  const size = 11;
  switch (icon) {
    case "dashboard":
      return <Layers size={size} />;
    case "users":
      return <Users size={size} />;
    case "roles":
      return <Shield size={size} />;
    case "permissions":
      return <Key size={size} />;
    case "activity":
      return <Activity size={size} />;
    case "settings":
    default:
      return <Settings size={size} />;
  }
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentProject = PROJECTS_DATA[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === PROJECTS_DATA.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PROJECTS_DATA.length - 1 ? 0 : prev + 1));
  };

  const formattedCurrent = String(currentIndex + 1).padStart(2, "0");
  const formattedTotal = String(PROJECTS_DATA.length).padStart(2, "0");

  return (
    <section className={styles.projectsSection} id="projects" aria-label="Featured Projects">
      {/* Top Overline Navigation */}
      <div className={styles.topNav}>
        <div className={styles.topLeftNav}>
          <span className={styles.indexNum}>04</span>
          <div className={styles.indexLine} />
          <span className={styles.sectionLabel}>PROJECTS</span>
        </div>

        <div className={styles.topRightSlogan}>
          <span className={styles.sloganWord}>REAL</span>
          <span className={styles.sloganWord}>SOLUTIONS</span>
          <span className={styles.sloganWord}>REAL IMPACT</span>
        </div>
      </div>

      {/* Main Grid: Left Details + Right Laptop Screen */}
      <div className={styles.mainGrid}>
        {/* Left Column: Project Details */}
        <motion.div
          className={styles.leftCol}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.featuredLabel}>{currentProject.category}</span>

          <h2 className={styles.projectTitle}>
            {currentProject.title}
          </h2>

          <p className={styles.projectDesc}>{currentProject.description}</p>

          {/* Tech Badges */}
          <div className={styles.techBadges}>
            {currentProject.tags.map((tag) => (
              <span key={tag} className={styles.techBadge}>
                {tag}
              </span>
            ))}
          </div>

          {/* Key Features List */}
          <div className={styles.featuresList}>
            {currentProject.features.map((feature) => (
              <div key={feature.num} className={styles.featureItem}>
                <div className={styles.featureIndexGroup}>
                  <span className={styles.featureNum}>{feature.num}</span>
                  <div className={styles.featureLine} />
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDesc}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className={styles.actionRow}>
            <Link
              href={currentProject.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              <span>View Live Demo</span>
              <ArrowUpRight size={17} strokeWidth={2} />
            </Link>

            <Link
              href={currentProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              <span>View Code on GitHub</span>
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Controls Bar & Realistic MacBook Mockup */}
        <motion.div
          className={styles.rightCol}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top Controls: 01 / 06 ────── [ < ] [ > ] */}
          <div className={styles.controlsBar}>
            <div className={styles.slideCounter}>
              <span className={styles.currentSlide}>{formattedCurrent}</span>
              <span className={styles.totalSlides}>/ {formattedTotal}</span>
            </div>

            <div className={styles.controlsTrack} />

            <div className={styles.navButtons}>
              <button
                type="button"
                onClick={handlePrev}
                className={styles.navBtn}
                aria-label="Previous project"
              >
                <ArrowLeft size={16} strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className={`${styles.navBtn} ${styles.navBtnActive}`}
                aria-label="Next project"
              >
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Laptop Mockup */}
          <div className={styles.laptopWrapper}>
            {/* Display Lid */}
            <div className={styles.laptopLid}>
              {/* Camera Notch */}
              <div className={styles.laptopNotch}>
                <div className={styles.cameraLens} />
              </div>

              {/* Display Screen with Active Dashboard UI */}
              <div className={styles.laptopScreen}>
                <div key={currentProject.id} className={styles.screenContainer}>
                  {/* Screen Header */}
                  <div className={styles.screenHeader}>
                    <div className={styles.screenLogoGroup}>
                      <div className={styles.screenLogoIcon}>
                        <Layers size={11} />
                      </div>
                      <span className={styles.screenLogoText}>{currentProject.screen.appName}</span>
                    </div>

                    <div className={styles.screenSearchBox}>
                      <Search size={11} color="#8c909a" />
                      <span className={styles.screenSearchPlaceholder}>
                        {currentProject.screen.searchPlaceholder}
                      </span>
                    </div>

                    <div className={styles.screenUserControls}>
                      <div className={styles.screenBellIcon}>
                        <Bell size={12} />
                      </div>
                      <div className={styles.screenUserBadge}>
                        <div className={styles.screenAvatar}>
                          {currentProject.screen.userInitial}
                        </div>
                        <span>{currentProject.screen.userRole}</span>
                      </div>
                    </div>
                  </div>

                  {/* Screen Body: Sidebar + Main Content */}
                  <div className={styles.screenBody}>
                    {/* Mini Sidebar */}
                    <div className={styles.screenSidebar}>
                      {currentProject.screen.sidebarItems.map((item) => (
                        <div
                          key={item.name}
                          className={`${styles.sidebarItem} ${
                            item.active ? styles.sidebarItemActive : ""
                          }`}
                        >
                          <div className={styles.sidebarIcon}>
                            {renderSidebarIcon(item.icon)}
                          </div>
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Main Screen Content */}
                    <div className={styles.screenMain}>
                      {/* Greeting / Title Row */}
                      <div className={styles.screenTitleRow}>
                        <div>
                          <h3 className={styles.screenHeading}>{currentProject.screen.heading}</h3>
                          <p className={styles.screenSubheading}>{currentProject.screen.subheading}</p>
                        </div>
                        <div className={styles.screenDateText}>
                          <Calendar size={11} />
                          <span>{currentProject.screen.dateText}</span>
                        </div>
                      </div>

                      {/* 4 Metric Cards */}
                      <div className={styles.statCardsRow}>
                        {currentProject.screen.stats.map((stat) => (
                          <div key={stat.label} className={styles.statCard}>
                            <div className={styles.statCardTop}>
                              <span className={styles.statCardLabel}>{stat.label}</span>
                              <div
                                className={styles.statCardIconBox}
                                style={{
                                  backgroundColor:
                                    stat.trendType === "green" ? "#eefcf2" : "#eef4fe",
                                }}
                              >
                                {renderStatIcon(stat.iconType)}
                              </div>
                            </div>
                            <div className={styles.statCardValueRow}>
                              <span className={styles.statCardValue}>{stat.value}</span>
                              <span
                                className={`${styles.statCardTrend} ${
                                  stat.trendType === "green" ? styles.trendGreen : styles.trendBlue
                                }`}
                              >
                                {stat.trend}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Split Row: Recent Activity & Roles / Channels */}
                      <div className={styles.screenSplitRow}>
                        {/* Left Card */}
                        <div className={styles.contentCard}>
                          <div className={styles.cardTopHeader}>
                            <span className={styles.cardHeaderTitle}>
                              {currentProject.screen.leftCardTitle}
                            </span>
                            <span className={styles.cardHeaderAction}>
                              {currentProject.screen.leftCardAction}
                            </span>
                          </div>

                          <div className={styles.dataList}>
                            {currentProject.screen.activities.map((act) => (
                              <div key={act.primary} className={styles.dataRow}>
                                <div className={styles.dataRowLeft}>
                                  <div
                                    className={styles.dataRowIcon}
                                    style={{
                                      backgroundColor: act.iconBg,
                                      color: act.iconColor,
                                    }}
                                  >
                                    <CheckCircle2 size={11} />
                                  </div>
                                  <div className={styles.dataRowTexts}>
                                    <span className={styles.dataRowPrimary}>{act.primary}</span>
                                    <span className={styles.dataRowSecondary}>{act.secondary}</span>
                                  </div>
                                </div>
                                <span className={styles.dataRowTime}>{act.time}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Card */}
                        <div className={styles.contentCard}>
                          <div className={styles.cardTopHeader}>
                            <div>
                              <span className={styles.cardHeaderTitle}>
                                {currentProject.screen.rightCardTitle}
                              </span>
                              <div className={styles.cardHeaderSub}>
                                {currentProject.screen.rightCardSub}
                              </div>
                            </div>
                          </div>

                          <div className={styles.dataList}>
                            {currentProject.screen.roles.map((r) => (
                              <div key={r.role} className={styles.dataRow}>
                                <div className={styles.dataRowLeft}>
                                  <div className={styles.dataRowTexts}>
                                    <span className={styles.dataRowPrimary}>{r.role}</span>
                                    <span className={styles.dataRowSecondary}>{r.desc}</span>
                                  </div>
                                </div>
                                <span
                                  className={`${styles.statusBadge} ${
                                    styles[r.badgeType] || styles.badgeGreen
                                  }`}
                                >
                                  {r.badgeText}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Base Keyboard Deck */}
            <div className={styles.laptopBase}>
              <div className={styles.laptopThumbIndent} />
              <div className={styles.laptopBaseLip} />
            </div>

            {/* Soft Ambient Drop Shadow */}
            <div className={styles.laptopShadow} />
          </div>
        </motion.div>
      </div>

      {/* Bottom Overline Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomLeft}>
          <span className={styles.bottomSectionTitle}>PROJECTS</span>
          <div className={styles.bottomDivider} />
          <span className={styles.bottomMindset}>BUILT TO SOLVE REAL PROBLEMS.</span>
        </div>

        <div className={styles.bottomRight}>
          <span className={styles.bottomActionWord}>A SMALL STEP</span>
          <span className={styles.bottomActionWord}>TOWARDS A BIGGER TOMORROW</span>
        </div>
      </div>
    </section>
  );
}
