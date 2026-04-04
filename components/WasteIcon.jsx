"use client";

import {
  Droplet,
  Leaf,
  Shell,
  Recycle,
  TreePine,
  Package,
  User,
  Upload,
  Handshake,
} from "lucide-react";

const iconMap = {
  droplet: Droplet,
  leaf: Leaf,
  shell: Shell,
  recycle: Recycle,
  tree: TreePine,
  package: Package,
  user: User,
  upload: Upload,
  handshake: Handshake,
};

export default function WasteIcon({ icon, size = 24, className = "" }) {
  const IconComponent = iconMap[icon] || Package;
  return <IconComponent size={size} className={className} />;
}
