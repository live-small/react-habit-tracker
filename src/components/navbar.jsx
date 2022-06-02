import React from "react";

// pureComponent: props, state를 얕은비교과정을 거쳐(shouldComponentUpdate)
// shouldComponentUpdate() : 같으면 false(업데이트 안해도돼), 다르면 true
// - 여긴 상태값을 props로 받지 않기에 리렌더링 될 가능성 없음

// memo: props를 얕은비교(areEqual)를 거쳐, 서로같으면 true, 다르면 false
// - false일때만 리렌더링함

const NavBar = React.memo(function NavBar({ totalCount }) {
	console.log(`Nav bar`);

	return (
		<header>
			<i className="fa-solid fa-leaf"></i>
			<span className="title">Habit tracker</span>
			<span className="total-count">{totalCount}</span>
		</header>
	);
});

export default NavBar;
