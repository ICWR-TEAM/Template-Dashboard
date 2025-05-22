import React from "react";

function Sidebar({ login }) {
  return (
    <aside className="offcanvas offcanvas-start bg-black" id="sidebar">
      <div className="offcanvas-header">
        <b className="offcanvas-title text-white">RusherMedia - incrustwerush.org</b>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div className="offcanvas-body">
        <nav>
          {login ? (
            <ul className="nav flex-column list-unstyled">
              <MenuItem icon="fas fa-tachometer-alt" text="Home" href="/" />
              <MenuItem icon="fas fa-user" text="Profile" href="#" />
              <DropdownMenu
                icon="fas fa-toolbox"
                text="Tools"
                submenuId="submenutools"
                items={[{ icon: "fas fa-circle", text: "Maintenance", href: "#" }]}
              />
              <MenuItem icon="fas fa-message" text="Chat" href="#" />
              <MenuItem icon="fas fa-cogs" text="Account Setting" href="#" />
            </ul>
          ) : (
            <span className="text-white">You must log in first</span>
          )}
        </nav>
      </div>
    </aside>
  );
}

function MenuItem({ icon, text, href }) {
  return (
    <li>
      <a className="nav-link text-white" href={href}>
        <i className={`${icon} me-2`}></i> {text}
      </a>
    </li>
  );
}

function DropdownMenu({ icon, text, submenuId, items }) {
  return (
    <li>
      <a
        className="nav-link text-white d-flex align-items-center"
        data-bs-toggle="collapse"
        href={`#${submenuId}`}
        role="button"
        aria-expanded="false"
        aria-controls={submenuId}
      >
        <i className={`${icon} me-2`}></i> {text}
        <i className="fas fa-chevron-down ms-auto"></i>
      </a>
      <ul className="collapse list-unstyled ps-3" id={submenuId}>
        {items.map((item, index) => (
          <MenuItem key={index} icon={item.icon} text={item.text} href={item.href} />
        ))}
      </ul>
    </li>
  );
}

export default Sidebar;
