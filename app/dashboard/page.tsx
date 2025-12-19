"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  MoreVertical,
  Users,
  Calendar,
  BarChart3,
} from "lucide-react";

const SAMPLE_BOARDS = [
  {
    id: 1,
    name: "Marketing Campaign",
    description: "Q1 marketing initiatives",
    members: 5,
    tasks: 24,
  },
  {
    id: 2,
    name: "Product Roadmap",
    description: "Next quarter features",
    members: 8,
    tasks: 42,
  },
  {
    id: 3,
    name: "Design System",
    description: "UI component library",
    members: 3,
    tasks: 15,
  },
  {
    id: 4,
    name: "Mobile App",
    description: "iOS & Android development",
    members: 6,
    tasks: 38,
  },
];

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [boards] = useState(SAMPLE_BOARDS);

  const filteredBoards = boards.filter(
    (board) =>
      board.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      board.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Boards</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Manage and organize your projects
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/analytics">
              <Button variant="outline" className="bg-transparent gap-2">
                <BarChart3 size={18} />
                Analytics
              </Button>
            </Link>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Plus size={18} />
              New Board
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Search boards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Boards Grid */}
        {filteredBoards.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBoards.map((board) => (
              <Link key={board.id} href={`/board/${board.id}`}>
                <Card className="p-6 hover:border-primary/50 hover:shadow-md transition cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{board.name}</h3>
                      <p className="text-muted-foreground text-sm">
                        {board.description}
                      </p>
                    </div>
                    <button className="p-2 hover:bg-secondary rounded-lg transition">
                      <MoreVertical
                        size={18}
                        className="text-muted-foreground"
                      />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{board.members} members</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{board.tasks} tasks</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No boards found</p>
          </div>
        )}
      </main>
    </div>
  );
}
