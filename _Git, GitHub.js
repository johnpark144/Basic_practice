// ######### 용어설명 ##################################################################################################
// CLI : Command Line Interface (터미널)
// GUI : Graphical User Interface

git --version  // 버전확인

// ######### Git 기본설정 (필) ##################################################################################################
git config --global user.name "(본인 이름)"     // 이름 최초 설정   (나중에 누가 코드작성했는지 확인가능)
git config --global user.email "(본인 이메일)" // 이메일 최초 설정

git config --global user.name     // 설정되있는 이름 확인
git config --global user.email    // 설정되있는 이메일 확인

// ######## Git 관리 선언, 상태, 코밋준비, 코밋  #########################################################################################
git init    // git으로 관리 선언 (git으로 관리할 내역들이 담길 숨김폴더 생성  ->  지우면 내역 날아감)
git status  //  현재 폴더의 상태를 확인
// Changes to be committed:   // Commit 준비 임시저장소에 있는것들 (deleted, modified 사실도 알려줌)
// Untracked files:   // add 되지 않은 새 파일

git add .   // 변화한 전체 파일을 Commit준비할 임시저장소에 저장  (.대신 특정파일만 저 가능)
git commit -m "FIRST COMMIT"  // 코밋 내용

git commit -am "FIRST COMMIT" // Add와 Commit을 동시에 (새로 추가된(untracked) 파일이 없을 때 한정)



// ######## Vim 모드 상태확인  (사용할일 거의 없음)
git diff  // Vim 모드로 더 자세히 상태확인 
  k	// 위로 스크롤
	j // 아래로 스크롤
  :q	// 종료
  
// ######## Vim 모드 코밋 (사용할일 거의 없음)
git commit  // Vim 모드로 코밋 

	i // 입력 시작 //	명령어 입력 모드에서 텍스트 입력 모드로 전환
	ESC	// 입력 종료 // 텍스트 입력 모드에서 명령어 입력 모드로 전환
	:q	// 저장 없이 종료
	:q! // 저장 없이 강제 종료
	:wq // 저장하고 종료 //	입력한 것이 있을 때 사용
	k	// 위로 스크롤
	j // 아래로 스크롤

// ######## .gitignore 파일 기본 예시 ##################################################################################################
file.c    // 모든 file.c
/file.c   // 최상위 폴더의 file.c
file    // file이란 이름의 파일과 폴더와 그 내용들
file/   // file이란 이름의 폴더와 그 내용들
*.c   //  모든 .c 확장자 파일
!not_ignore_this.c  // .c 확장자지만 무시하지 않을 파일

file/debug.log  // file이란 폴더 바로 안에 debug.log 파일
file/*.c  // file이란 폴더 바로 안에 확장자가 .c 인 파일들

file/**/debug.log   // logs 폴더 바로 안, 또는 그 안의 다른 폴더(들) 안의 debug.log

// ########  ##################################################################################################



// ######## 소스트리 ##################################################################################################
// 검색부분 밑에 폴더를 끌어다 두면 확인가능


